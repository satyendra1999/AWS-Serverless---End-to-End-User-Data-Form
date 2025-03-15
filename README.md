# AWS Serverless - End-to-End User Data Form 🚀  

A fully serverless user form built using AWS services with a **bottom-up approach**.  
This project handles **user data storage and retrieval** using API Gateway, Lambda, and DynamoDB while serving a frontend via S3 & CloudFront.  

## 🏗 **Architecture Overview**  
|-----------------------------------------------------------------------------------|
| User → [CloudFront + S3] → [API Gateway] → [Lambda (Python)] → [IAM] → [DynamoDB] |
|-----------------------------------------------------------------------------------|

### 🔹 **Tech Stack & AWS Services Used**  
✔ **Frontend**: HTML, CSS, JavaScript (Hosted on **S3 + CloudFront**)  
✔ **Backend API**: **AWS Lambda (Python)** for user data handling  
✔ **API Gateway**: Manages **POST (insert) & GET (retrieve)** requests  
✔ **Database**: **DynamoDB** (NoSQL, serverless DB)  
✔ **IAM Roles**: Secure access between **Lambda & DynamoDB**  
✔ **CORS Enabled**: For cross-origin API calls  
✔ **Deployment**: **AWS Console** used for manual setup  

---

## ⚙ **Implementation Steps (Bottom-Up Approach)**
### 1️⃣ **DynamoDB Table Creation**
- Created a **DynamoDB table** to store user data with a **Primary Key (UserID)**  

### 2️⃣ **Lambda Function Setup (Python)**
- Created **two Lambda functions**:
  - `insertUserData` → Saves user data into DynamoDB  
  - `getUserData` → Fetches user data from DynamoDB  
- Assigned **IAM Role** to allow Lambda to interact with DynamoDB  
- Deployed **Python code** in AWS Lambda  

### 3️⃣ **API Gateway Configuration**
- Created **API Gateway** and defined:
  - **POST Method** → Calls `insertUserData` Lambda function  
  - **GET Method** → Calls `getUserData` Lambda function  
- **Enabled CORS** for frontend integration  
- **Deployed API** to get the **endpoint URL**  

### 4️⃣ **Frontend Deployment (S3 + CloudFront)**
- **Created S3 bucket** and uploaded **HTML, CSS, JavaScript** files  
- **Configured CloudFront** to serve frontend from S3  
- **Integrated API Gateway URL** in JavaScript to make requests  

---

## 🚀 **How to Run Locally**
### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/username/aws-serverless-user-form.git
cd aws-serverless-user-form
