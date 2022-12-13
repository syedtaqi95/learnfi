terraform {
  cloud {
    organization = "syed-taqi-haider"
    workspaces {
      name = "portfolio-dashboard-prod-eu-west-2"
    }
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region = "eu-west-2"
}

provider "aws" {
  alias  = "acm_provider"
  region = "us-east-1"
}
