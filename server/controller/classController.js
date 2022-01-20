const {Class, UserClass} = require('../models')

class classController {

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
            const newDate = new Date(date) // gara2 di postman gabisa passing date, kalau frontend nya bisa handle ga perlu ini
            const createdClass = await Class.create({name, image, link, date: newDate, price})
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
            res.status(200).json({message: `Success Update class with id ${classId}`})
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

    //dibawah ini buat user

    static async registerClass (req, res, next) { // add UserClass
        try {
            
        } catch (err) {
            
        }
    }

    static async updatePayedStatus(req, res, next) { // PATCH UserClass
        try {
            
        } catch (err) {
            
        }
    }

    static async cancelClass(req, res, next) { //delete UserClass

    }

    static async fetchUserClasses(req, res, next) {
        try {
            const {userId} = req.params
            const classes = await UserClass.findAll({where: {
                userId
            }})
            res.status(200).json(classes)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = classController