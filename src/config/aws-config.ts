

const awsConfig = {
    "aws_project_region": process.env.AWS_PROJECT_REGION,
    "aws_cognito_region": process.env.AWS_COGNITO_REGION,
    "aws_user_pools_id": process.env.AWS_USER_POOLS_ID,
    "aws_user_pools_web_client_id": process.env.AWS_USER_POOLS_WEB_CLIENT_ID,
    "oauth": {
        "domain": process.env.OAUTH_DOMAIN,
    },
    "aws_cognito_username_attributes": [],
    "aws_cognito_social_providers": [],
    "aws_cognito_signup_attributes": [
        "EMAIL"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": [
            "REQUIRES_LOWERCASE",
            "REQUIRES_UPPERCASE",
            "REQUIRES_NUMBERS"
        ]
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ]
};


export default awsConfig;
