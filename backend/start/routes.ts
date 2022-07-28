/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

// Clients Routes:
Route.group(() => {
  Route.post('/', 'ClientsController.createClient');
  Route.get('/', 'ClientsController.getAllClients');
  Route.get('/:clientId', 'ClientsController.getOneClient');
}).prefix('/client');

// Staff Routes: 
Route.group(() => {
  Route.post('/', 'StaffController.createStaff');
  Route.get('/', 'StaffController.getAllStaff');
  Route.get('/:staffId', 'StaffController.getOneStaff');
}).prefix('staff');

// Appointment Routes:
Route.group(() => {
  Route.post('/', 'AppointmentsController.createAppointment');
  Route.get('/', 'AppointmentsController.getAllAppointments');
  Route.get('/:appointmentId', 'AppointmentsController.getOneAppointment');
}).prefix('/appointment');