# 🚀 DEPLOYMENT README

## Project

Angular Frontend Application (without server-side)

## Deployment Link

https://main.d1wf275t1om9ok.amplifyapp.com

## Service

AWS Amplify\
Amazon lineup 2023 (default)

### Amplify Settings

-   Build instance type: Standard

------------------------------------------------------------------------

## Steps for Deployment

1. Create an AWS account.  
2. Activate MFA (Multi-Factor Authentication) for the root account.  
3. Create an IAM user for best practice.  
4. Add the IAM user to a User Group.  
5. Also activate MFA for the IAM user.  
6. Log in with the new IAM user account.  
7. Search and navigate to **Amplify** in AWS Management Console.  
8. Click on **Create new app**.  
9. Select **GitHub** and click **Next**.  
10. Log in and authorize AWS Amplify to access your GitHub account.  
11. Select repository and branch, then click **Next**.  
12. Configure build settings:  
    - **Build command**: `npm run build`  
    - **Build output directory**: `dist/noteworthy/browser`  
    - Click **Next**  
13. Review the configuration and click **Deploy**.  

---

## Reasons

### Cost

-   Amplify hosting offers predictable low costs for static sites.
-   Free tier includes 1,000 build minutes and 5 GB storage for 12
    months.
-   Avoids extra expenses of setting up and maintaining S3 + CloudFront
    manually.

### Benefits

-   Fully managed hosting service with CI/CD built-in.
-   Automatic deployments on every Git push.
-   Free HTTPS certificates with AWS Certificate Manager.
-   Easy domain integration with Route53 or custom DNS.
-   Scalable with AWS infrastructure and global CDN.
-   Supports environment previews for testing feature branches.

------------------------------------------------------------------------

## Summary

This project uses **AWS Amplify** for cost-effective, scalable, and
developer-friendly hosting of an Angular frontend. It minimizes
operational overhead while providing enterprise-level performance and
security.
