const { User, Class, UserClass } = require('../models')

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
            const { classId } = req.params
            const oneClass = await Class.findByPk(classId)
            res.status(200).json(oneClass)
        } catch (err) {
            next(err)
        }
    }

    static async addClass(req, res, next) {
        try {
            const { name, link, date, price } = req.body
            const image = req.additionalData
            const newDate = new Date(date) // gara2 di postman gabisa passing date, kalau frontend nya bisa handle ga perlu ini
            const createdClass = await Class.create({ name, image, link, date: newDate, price })
            res.status(201).json(createdClass)
        } catch (err) {
            next(err)
        }
    }

    static async editClass(req, res, next) {
        try {
            const { classId } = req.params
            const { name, link, date, price } = req.body
            const image = req.additionalData
            let updatedClass = ''
            if (image) {
                updatedClass = await Class.update({ name, image, link, date, price }, {
                    where: {
                        id: classId
                    }
                })
            } else {
                updatedClass = await Class.update({ name, link, date, price }, {
                    where: {
                        id: classId
                    }
                })
            }
            res.status(200).json({ message: `Success Update class with id ${classId}` })
        } catch (err) {
            next(err)
        }
    }

    static async deleteClass(req, res, next) {
        try {
            const { classId } = req.params
            await Class.destroy({ where: { id: classId } })
            res.status(200).json({ message: `Class with id ${classId} deleted successfully` })
        } catch (err) {
            next(err)
        }
    }

    //dibawah ini buat user

    static async registerClass(req, res, next) { // add UserClass
        try {
            console.log('heheeeeeeeeeeeeeeeee')
            const id = req.user.id
            const { classId } = req.params
            const newClass = await Class.findByPk(classId)
            const userBalance = await User.findByPk(id)
            console.log(userBalance.balance, "ini balance")
            console.log(newClass.price, 'INI PRICE')
            if (userBalance.balance == null || newClass.price > userBalance.balance) {
                throw { name: 'BALANCE_NOT_ENOUGH' }
            }
            const isExist = await UserClass.findOne({where: {
                userId: id,
                classId
            }})
            if (isExist) {
                throw { name: 'CLASS_ALREADY_REGISTERED'}
            }
            await UserClass.create({
                userId: id,
                classId,
                isPayed: true
            })
            const balance = userBalance.balance-newClass.price
            await User.update({balance}, {where: {id}})
            res.status(201).json({message: 'Success register Class'})
        } catch (err) {
            next(err)
        }
    }

    static async cancelClass(req, res, next) { //delete UserClass
        try {
            const id = req.user.id
            const {classId} = req.params
            const checkExist = await UserClass.findOne({where: {userId: id, classId}})
            if (!checkExist) {
                throw {name: 'MY_CLASS_NOT_FOUND'}
            }
            await UserClass.destroy({where: {userId: id, classId}})
            res.status(200).json({message: 'Success Cancel Class'})
        } catch (err) {
            next(err)
        }
    }

    static async fetchUserClasses(req, res, next) {
        try {
            const id = req.user.id
            const classes = await UserClass.findAll({
                where: {
                    userId: id
                },
                attributes: { exclude: ['createdAt', 'updatedAt'] },
                include: [
                    {
                        model: User,
                        key: 'id',
                        attributes: { exclude: ['password', 'createdAt', 'updatedAt', 'profilePict', 'balance', 'description'] }
                    },
                    {
                        model: Class,
                        key: 'id',
                        attributes: { exclude: ['createdAt', 'updatedAt'] }
                    }
                ]
            })
            res.status(200).json(classes)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = classController