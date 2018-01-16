module.exports = {
    create: (req,res,next) => {
        const dbInstance = req.app.get('db');
        const {name,description,price,imageurl} = req.body;
        dbInstance.create_Product([name,description,price,imageurl])
            .then(() => res.status(200).send())
            .catch(() => res.status(500).send());
    },
    getOne: (req,res,next) => {
        const dbInstance = req.app.get('db');
        const {id} = req.params;
        dbInstance.read_Product([params.id])
            .then(product => res.status(200).send(product))
            .catch(() => res.status(500).send());
    },
    getAll: (req,res,next) => {
        const dbInstance = req.app.get('db');
        dbInstance.read_Products()
            .then(products => res.status(200).send(products))
            .catch(() => res.status(500).send());
    },
    update: (req,res,next) => {
        const dbInstance = req.app.get('db');
        const {params, desc} = req;
        dbInstance.update_Product([params.id, query.desc])
            .then(() => res.status(200).send())
            .catch(() => res.status(500).send());
    },
    delete: (req,res,next) => {
        const dbInstance = req.app.get('db');
        const {id} = req.params;
        dbInstance.delete_Product([params.id])
            .then(() => res.status(200).send())
            .catch(() => res.status(500).send());
    }
}