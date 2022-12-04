variable "project_name" {
  type        = string
  description = "Name of the project"
}

variable "subdomain_name" {
  type = string
  description = "The subdomain for the website."
}

variable "domain_name" {
  type        = string
  description = "The domain name for the website."
}

variable "admin_iam_arn" {
  type        = string
  description = "ARN of the Administrator."
}
