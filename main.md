---
pdf_options:

  printBackground: true
  headerTemplate: |-
    <style>
      section {
        margin: 0 auto;
        font-family: system-ui;
        font-size: 11px;
      }
    </style>
    <section></section>
  footerTemplate: |-
    <section style="display: flex; justify-content: space-between; align-items: center; width: 100%; padding: 5mm 10mm; font-family: system-ui; font-size: 11px;">
      <div style="display: flex; align-items: center;">
        <img src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjYuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxODY0LjkgNjA4LjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4NjQuOSA2MDguNjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMwMDczRTY7fQo8L3N0eWxlPgo8Zz4KCTxnPgoJCTxnPgoJCQk8Zz4KCQkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNjgxLjEsMjUxLjFjLTk4LjUtMzEuNy0xMjYuNC01OS4xLTEyNi40LTg4LjFjMC00MSw0OC42LTY1LjMsMTE5LjItNjUuM2MyNy4zLDAsNDcsMi41LDYwLjgsNS41bC0wLjUsODEKCQkJCQlsOTIuOCwxLjdsNi41LTE2Mi45QzE3ODkuNywxMi41LDE3MjIuMiwwLDE2NjUuOCwwYy0xMzAuNSwwLTIzMy41LDYxLjktMjMzLjUsMTczLjdjMCwxMDYuMyw3MS42LDE0NS43LDE5OC4zLDE4NS4xCgkJCQkJYzk3LjgsMzAuNSwxMDguMSw1My44LDEwOC4xLDgzLjhjMCwzNC40LTQ4LjEsNjAuMS0xMDkuNSw2MC4xYy02MywwLTEzMi44LTIxLjQtMTc1LjctMzkuMmMtMTEuNiwyNC45LTM2LjYsNjYuOS01My4xLDkwLjkKCQkJCQljNjMuNSwzNC45LDEzOS4zLDUzLjksMjI0LjQsNTMuOWMxMjkuOSwwLDI0MC4yLTYxLjUsMjQwLjItMTgzLjRDMTg2NC45LDMzMC4yLDE4MDgsMjkxLjksMTY4MS4xLDI1MS4xIi8+CgkJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzk3LjQsNC42TDE0NSw0LjZsMCw3NGw2My4zLDBMNTAuNCw1MjQuM2wtNTAuNCwwbDAsNzRsMjExLjgsMGwwLTc0bC00OS43LDBsMjguOC04MS4zbDIyOS41LDBsMjguOCw4MS4zCgkJCQkJbC00Ni42LDBsMCw3NGwyMjYuNiwwbDAtNzRsLTQ3LjMsMEwzOTcuNCw0LjZ6IE0yMjMuMywzNTAuNWw4Mi4xLTIzMS45bDgyLjMsMjMxLjlMMjIzLjMsMzUwLjV6Ii8+CgkJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTI1OS45LDEwNS44TDEyNTkuOSwxMDUuOGMtMzEuMy0xMy40LTY1LjctMjAuNi0xMDEuOC0yMC42Yy05LjMsMC0xOC40LDAuNS0yNy41LDEuNAoJCQkJCWMtMzEuNiw0My4zLTUwLjQsOTYuNi01MC40LDE1NC4zYzAsMTA4LjQsNjYsMjAxLjQsMTYwLDI0MS4yYy0yMy42LDE2LjQtNTEuOSwyNi04Mi4yLDI2Yy04My41LDAtMTUxLjEtNzIuMS0xNTEuMS0xNjEuMQoJCQkJCWMwLTM4LjMsMTIuNi03My42LDMzLjYtMTAxLjJjMC00MC45LDE0LjYtMTE1LjEsMzYuNC0xNDcuNmMtMTA1LjYsMzQtMTgwLjgsMTM0LjEtMTgwLjgsMjQ4LjhjMCw0NS42LDExLjcsODguNCwzMi4yLDEyNS44CgkJCQkJYy0yNC44LDI2LjEtNTguMyw0MS05MC4yLDQxYy00My4yLDAtNzQuMy0zMy45LTc0LjMtODQuNmwwLTIzMi43bDEzNC45LDBsMC05Mi43bC0xMzQuOSwwbDAtMTAwLjFsLTEyMS4yLDBsMCwxMDAuMWwtODksMAoJCQkJCWwwLDkyLjZsODksMGwwLDI0NC42YzAsMTI1LjcsODcuNiwxNjcsMTcyLjcsMTY3YzcxLjMsMCwxMjkuMy0zMy42LDE2MS41LTcyLjRjNDcuMSw0NS4yLDExMC45LDczLDE4MS40LDczCgkJCQkJYzE0Mi43LDAsMjYxLjktMTE2LjUsMjYxLjktMjYxLjdDMTQxOS45LDIzOC41LDEzNTMuOSwxNDUuNSwxMjU5LjksMTA1LjggTTEzMDEuOSwzOTYuMWMtNjMuOS0xOC43LTExMS04MS0xMTEtMTU1LjIKCQkJCQljMC0xNy4xLDIuNi0zMy43LDcuMy00OS4yYzYzLjksMTguOCwxMTEsODEuMSwxMTEsMTU1LjNDMTMwOS4yLDM2NCwxMzA2LjYsMzgwLjYsMTMwMS45LDM5Ni4xIi8+CgkJCTwvZz4KCQk8L2c+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==' style='width: 50px; height: auto;' />
      </div>
      <div style="text-align: right; color: #0066CC;">
        <span class="pageNumber"></span>/<span class="totalPages"></span>
      </div>
    </section>
---
<div style="font-size: 3em; font-weight: bold; text-align: center; color: #003399; margin: 0em 0; padding: 0; font-family: 'Biennale', sans-serif;">Architecture Document</div>

Summary: This architecture document describes a basic application.

<div style="font-size: 1.5em; font-weight: bold; text-align: center; color: #003399; margin: 2em 0; font-family: 'Biennale', sans-serif;">Table of Contents</div>

<div id="toc"></div>

<script src="./scripts/toc.js"></script>
<script src="https://cdn.jsdelivr.net/npm/mermaid@11.12.2/dist/mermaid.min.js"></script>
<script src="./scripts/mermaid-rendering.js"></script>

# Functional Requirements

  - to be continue

# System Identification:

## Frontend
The application consists of a web frontend of "single page application" type:
  - strengthen desktop usage
  - simplify version upgrades
  - simplify SaaS implementation

## API Backend 
A business server part receives user commands from the Frontend and applies them to the database:
  - ensures security by managing authentication and authorization in production

## Database
  Stores the business data of the application



# Frameworks and Technologies

## Frontend
  React Framework Choice:
  - popularity and robustness

## Backend API: 
  KeystoneJS + Prisma + GraphQL:
  - GraphQL and SQL migration are generated. Only KeystoneJS model modification is necessary
  - need to use passportjs + gafam idp or an idp server (e.g keycloak)

  Supabase + Prisma:
  - use of Prisma to generate the SQL to be applied in Supabase's Postgres database.
  - simplified authentication and authorization management
  - use of supabase rest apis

## Database:
  PostgreSQL:
  - popularity, compatibility and robustness
  - possibility of multi-tenant RLS management (row level security)

# Deployment and Hosting Infrastructure


## AWS 
  - Authentication and authorization: optional if handled by API Backend or Supabase auth otherwise: AWS Cognito
  - Frontend: AWS S3 + CloudFront
  - API Backend: AWS Fargate service
  - Database: AWS Aurora PostgreSQL




```mermaid
architecture-beta
    service internet(internet)[Internet]
    
    group vpc(cloud)[VPC]
    
    group publicsubnet(cloud)[Public Subnet] in vpc
    service alb(cloud)[ALB] in publicsubnet
    service frontendfargate(server)[React Frontend Fargate] in publicsubnet
    
    group privatesubnet(cloud)[Private Subnet] in vpc
    service backendfargate(server)[NestJS Backend Fargate] in privatesubnet
    service auroradb(database)[Aurora PostgreSQL] in privatesubnet

    service cloudwatch(server)[CloudWatch] in vpc

    internet:B --> T:alb
    alb:B --> T:frontendfargate
    frontendfargate:B --> T:backendfargate
    backendfargate:R --> L:auroradb

    cloudwatch:T --> L:frontendfargate
    cloudwatch:R --> L:backendfargate

```

<img src="assets/AWS.drawio.svg" alt="Architecture AWS" style="width: 100%; max-width: 600px; height: auto; display: block; margin: 1em auto;" />

[Source file](https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&dark=0#R%3Cmxfile%3E%3Cdiagram%20name%3D%22AWS%20Implementation%22%20id%3D%22aws-impl%22%3E7Zpbb%2BI4FMc%2FDdLuA1Uu0JRHLmVmpK7EDjPq7lNlEhOsmjhrmwL76fc4cSB2zBQ6dNRtaSs1PraPL%2Bf%2FO0kMrXC43HziKF%2F8wRJMW4GXbFrhqBUEfrcTwD9l2ZaWXicqDSkniW60N0zJv1gbPW1dkQQLo6FkjEqSm8aYZRmOpWFDnLO12WzOqDlqjlLcMExjRJvWe5LIhbb61719xWdM0oUe%2BibQ61uiqrFeiVighK1rpvC2FQ45Y7K8Wm6GmKrNq%2Fal7Dc%2BULubGMeZPKaDJBIW1eik%2FQi5rZYs8QbqBgu5pGDw4VJIzh7xkFHGwZKxDFoO5oRSy4QoSTMoxuAdg33whLkksJl9XbEkSaKGGawXROJpjmI15hqkAzbOVlmC1Ww95Z5lUsvBv67KepJqTuW0nxBd6Wn3eaycxnLFYZle%2F36qm8Ac8Ka2WL09nzBbYsm30GRRC2Cow7XeR7vjaZv2EtzostZ0pItIay3ded6HAy50RNzRQWvRjilbJcdEKGckk8Vg3QH8wfBDr9WFmqEqXQVdy2CXI9PgN0vKh2mwy5Fp8G33vjW%2Bb0%2BwZmiUDPeeNb5XmyD8hQO2kpRkoM8qBSj9pBwlBPbQkmhN1S4N1lUXWKpTXiHNSARjce2jiATmt0%2B4DEjZhlKUCzLb9eI4XnFBnvBXLErnygoJIVfXy02qcucVSKBzlQIFeTH9LzCWs%2FYBLh8KrTwgKht4toIQfsdKZi5GbSQly2vkUjwvPMKukCy9K0qjsOLRNUSCxGIHbRNKRaE33Av7VBp7TRy7PQtHz8TRD87AY8zSjEjWpNECtUaleMQyXuidcCLqxNSFqhPXJrJGswIixwi20WWLmka%2F2azirml02VxJxu7tO3r7Vu%2FDiB%2BSpI0%2B1I27najTq9WNCEApSYFYxrjSlkEL9BlGfuiPXXzNix9b%2FBVZd2iG6YQJot3PmJRs%2BSx6u5tmLUU9l46QyMvtmJONmoc7p3As2IrHuMwokI2EK7dUij9McR2JEzmObhoYVybtpGtC3D0DwyK84Ps%2B8L32%2BmEYnYZvEEV%2B8eT4MfAFsR8kdwogePd4BmuCR%2BNr2AJfDf%2FbV4xgeKif9H9%2FJaxfg%2Bs54imSjneZC9z%2FR7jH0c2t1zkN7pHXHfrRh4G7UvxBwscVEnu4%2B5MvUDFA8SPOktfCu%2FMKeOdMyBQ24h96Ifx9EN7pD4Je%2FzTC4d49guB9FMJ5Ig7TPSmJmP55Z9y9R9NfhfVZuGaQojIiIE2tuDjmmMtA%2Bqc06DiyrJqPDp1vvjl12WdN%2FiHFrUQxVkNM35X9JYK5bh7CVCbtxDoR9aPez%2BsFJylug2ja1XucMhhaccmnYO2g4GrqgrtiX31AoMJDkRAkNuPTPI52KQ3G59u%2FdKOi8LcqQFbVxdGmXjna1ksTzAlsS3GauD8%2Bk3Avx3pVtWOoH4eoApRjiiR5Mvepfnj2A5D1CBOls1ousI7XduXKRbnlulf9AwjbkZVUQnsu5cIbjgqd7JZ9vHRE2DZO8U6VTyW7s2vmEuYzh9l4IXzDYa7N8xLmE8Os966dzF4WZkMjvyDW5lvMJdzHh5uqZ6z2Qsr8qKfEt%2Fdx9fNCqT2Uff72bfKyT6qD5lNZx3wq8zuv8Bhfhsf5dv7uglO8cZ0nNKEZmm5ghebmbKFBYpvFHyA4%2Ff06z05OaKU7%2FwXhgeL%2B2z1lHtx%2FRyq8%2FQ8%3D%3C%2Fdiagram%3E%3C%2Fmxfile%3E)

# Annexe