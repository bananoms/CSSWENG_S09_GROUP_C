LocalStack Cloud Integration & Local Testing Guide AS OF JUNE 10

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Architecture Overview

- To bypass the need for actual AWS credentials and prevent cloud billing during development, we use LocalStack to emulate cloud services locally on port 4566.

[ Angular Frontend ] (not yet implemented as of JUNE 10)
         │
         ▼ (REST Requests via HTTP)
[ Spring Boot Backend ] (Port 8080)
         │
         ├──► SecurityConfig (Permits /api/localstack/** without auth headers)
         ├──► LocalStackController (Validates inputs & handles data streams)
         │         │
         │         ▼ (AWS Java SDK v2)
[ LocalStack Engine ] (Docker Container - Port 4566)
         ├──► S3 Bucket (document-maker-bucket)
         └──► SQS FIFO Queue (my-queue.fifo)

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Prerequisites & Setup

1.) Run the following command from the project directory containing your docker-compose.yml file to launch LocalStack and PostgreSQL:
docker compose up -d

2.) Initialize the Local Cloud Resources
LocalStack boots up completely empty. Every time you restart the container or reboot your machine, you must run these commands in your POWERSHELL
to create the storage bucket and message queue:
# Create the S3 Document Storage Bucket
aws --endpoint-url=http://localhost:4566 s3api create-bucket --bucket document-maker-bucket --region us-east-1
# Create the SQS FIFO Message Queue
aws --endpoint-url=http://localhost:4566 sqs create-queue --queue-name my-queue.fifo --attributes FifoQueue=true,ContentBasedDeduplication=true --region us-east-1

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Backend Implementation Details

Backend implementation consists of four major code components: (AS OF JUNE 10)
- AwsConfig.java:		 		Overrides the standard AWS SDK clients (S3Client and SqsClient) to point their endpoint URIs directly to http://localhost:4566 

- SecurityConfig.java: 			Implements a dedicated SecurityFilterChain that explicitly opens a .permitAll() pathway for /api/localstack/. 
							This allows testing endpoints locally without getting blocked by a 401 Unauthorized or 403 Forbidden error.

- LocalStackController.java: 	Exposes REST API endpoints, handles file uploads by attaching random UUID prefixes to keys to prevent naming collisions, 
						  	and configures SQS FIFO message grouping.

- GlobalExceptionHandler.java: Captures unmapped application pathways (such as 404 Not Found) and translates them into uniform JSON responses.