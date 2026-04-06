resource "vercel_project" "lab_deployment" {
  name      = "lab6-terraform-final"
  framework = "vite"
  root_directory = "my-app"
  git_repository = {
    type = "github"
    repo = "Ira-name/lab-1-setup"
  }
}

resource "vercel_project_domain" "custom_domain" {
  project_id = vercel_project.lab_deployment.id
  domain     = "lab6-final${var.student_id}.vercel.app"
}
