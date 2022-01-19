const {Class} = require('../models')

class classController {
    static async fetchClassesByUser(req, res, next) {
        try {
            const {userId} = req.params
            const classes = await Class.findAll({where: {
                userId
            }})
            res.status(200).json(classes)
        } catch (err) {
            next(err)
        }
    }

    static async fetchClasses(req, res, next) {
        try {
            const classes = await Class.findAll()
            res.status(200).json(classes)
        } catch (err) {
            next(err)
        }
    }

    static async fetchClass(req, res, next) {
        try {
            const {classId} = req.params
            const oneClass = await Class.findByPk(classId)
            res.status(200).json(oneClass)
        } catch (err) {
            next(err)
        }
    }

    static async addClass(req, res, next) {
        try {
            const {name, link, date, price} = req.body
            const image = req.additionalData
            const createdClass = await Class.create({name, image, link, date, price})
            res.status(201).json(createdClass)
        } catch (err) {
            next(err)
        }
    }

    static async editClass(req, res, next) {
        try {
            const {classId} = req.params
            const {name, link, date, price} = req.body
            const image = req.additionalData
            let updatedClass = ''
            if (image) {
                updatedClass = await Class.update({name, image, link, date, price}, {where: {
                    id: classId
                }})
            } else {
                updatedClass = await Class.update({name, link, date, price}, {where: {
                    id: classId
                }})
            }
            res.status(201).json(updatedClass)
        } catch (err) {
            next(err)
        }
    }

    static async deleteClass(req, res, next) {
        try {
            const {classId} = req.params
            await Class.destroy({where: {id: classId}})
            res.status(200).json({message: `Class with id ${classId} deleted successfully`})
        } catch (err) {
            next(err)
        }
    }
}

module.exports = classController