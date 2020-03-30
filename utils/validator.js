module.exports = {

    user: (app, req, res) => {

        req.assert('name', 'The name is required.').notEmpty();
        req.assert('email', 'The email is invalid.').notEmpty().isEmail();

        let errors = req.validationErrors();

        if (errors) {

            app.utils.error.send(errors, req, res);
            return false;

        } else {

            return true;

        }
    }
};