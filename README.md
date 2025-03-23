# ♟️ Web Chess Game on AWS EKS

A full-stack, containerized web-based chess game built with JavaScript, HTML/CSS, and a C#/.NET or Node.js backend, deployed on AWS using Kubernetes via Amazon EKS.

---

## 📌 Features

- 🎮 Interactive web-based chessboard (chess.js + chessboard.js)
- ♟️ Legal move validation and game state management
- 🌐 REST API for backend game logic (C#/.NET Core or Node.js)
- 📦 Dockerized frontend and backend
- ☁️ Deployed on AWS EKS with Kubernetes
- ⚙️ Load-balanced via AWS ALB Ingress Controller

---

## 🧰 Tech Stack

| Layer     | Tech                      |
|-----------|---------------------------|
| Frontend  | HTML, CSS, JavaScript     |
| Backend   | C# (.NET Core) OR Node.js |
| API Comm  | REST                      |
| Container | Docker                    |
| Orchestration | Kubernetes (EKS)      |
| Infra     | AWS (EKS, EC2, S3, ALB)   |
| Dev Tools | Cloud9, kubectl, eksctl   |

---

## 🚀 Getting Started

### Prerequisites

- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)
- [kubectl](https://kubernetes.io/docs/tasks/tools/)
- [eksctl](https://eksctl.io/)
- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/) (for frontend dev)
- [.NET SDK](https://dotnet.microsoft.com/) (if using C# backend)

### Clone the Repository

```bash
git clone https://github.com/Jonh0330/web-chess-game.git
cd web-chess-game

