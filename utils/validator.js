module.exports = {

    user: (app, req, res) => {

        req.assert('_name', 'The name is required.').notEmpty();
        req.assert('_email', 'The email is invalid.').notEmpty().isEmail();

        let errors = req.validationErrors();

        if (errors) {

            app.utils.error.send(errors, req, res);
            return false;

        } else {

            return true;

        }
    }
};