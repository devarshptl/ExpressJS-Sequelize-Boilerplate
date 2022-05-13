# ExpressJS Sequelize Boilerplate
Boilerplate application for ExpressJS based server application with Sequelize.

### Execution Steps

1) Install all packages: `yarn install`
2) Migrate data to SQLite database: `yarn db:sqlite:refresh`
3) Start the server: `yarn dev`(for development) or `yarn start`(for production).

### Sample Question

1) Register `method:POST`: `http://localhost:3000/api/user/register`
```javascript
{
	"uname": "Sample",
	"email": "sample@gmail.com",
	"pwd": "sample@1234"
}
```
2) Users `method:GET`: `http://localhost:3000/api/user`
