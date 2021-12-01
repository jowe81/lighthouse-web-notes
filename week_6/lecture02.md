# Crud in Express (Sandeep)

## 3-tier web architecture
- Presentation tier (Client)
  - GUI
- Application Tier (Server)
  - Handles logic
- Data Tier (Database)
  - Stores and reads data

## Restful API & http verbs

### Rest: REpresentational State Transfer
- A map between HTTP verb/path combinations and CRUD actions users want to perform on a resource
- Rest sits on top of HTTP

### CRUD & http verbs
- Create a new rocket -> POST /rockets
- Read (list all rockets) -> GET /rockets
- Get a specific rocket -> GET /rockets/:id 
- Display a new rocket form -> GET /rockets/new
- Update a rocket -> PUT /rocket/:id/update
- Delete a rocket -> DELETE /rocket/:id/delete


