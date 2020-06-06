require ('../connection')
const contactDetailsModel = require('../schemas/contactSchema')
class ContactDetailsHelper  //this is wrapper for the  extra layer of authentication
//Validation of data before doing CRUD
{
    static async findByName(name)
    {
        const result = await contactDetailsModel.find({Name:name})
        return result
    }
    static async findByNums(nums) // Array<string> [A,B,C]
    {
        if(Array.isArray(nums)){
            const result = await contactDetailsModel.find({ContactNumbers:{$in: nums}})
            return result
        }
        else
            throw "Error: nums is not an array in findByNums"
    }
    static async findByEmails(emails)
    {
        if(Array.isArray(emails)){
            const result = await contactDetailsModel.find({ContactNumbers:{$in: emails}})
            return result
        }
        else
            throw "Error: emails is not an array in findByEmails"
    }
    static async findAll()
    {
        const result = await contactDetailsModel.find({})
        return result;
    }
    static async insert(data)   //object
    {   ['ContactNumbers', 'Emails'].forEach((key) => {
            if(typeof data[key] == 'string')    //To check whethr it is one number(String)
                data[key] = [ data[key] ] 
        })
        
        if(Array.isArray(data['ContactNumbers'])){       //When   more than one number (ArrayOfStrings)
            data['ContactNumbers'].forEach((number) => {
                if(typeof number != 'string' || !(/^\d+$/.test(number)))             //To check that number is containing only ContactNumbers and no alphabet
                    throw "number shud not have any alphabet and it must be a string " + number
            })
            if(data['ContactNumbers'].length == 0)
                throw 'No number specified!'
        }
        else
            throw "numbers are invalid"

        if(Array.isArray(data['Emails'])){
            data['Emails'].forEach((email) => {
                if(typeof email != 'string' || !(/@/.test(email)))
                    throw 'Email should have @ and it should be a string ' + email
            })
        }

        //console.log((await this.findByNums(data['ContactNumbers'])).length)
        if((await this.findByNums(data['ContactNumbers'])).length == 0)
        { //Checking whether the number is unique or not
            let contactDetail = new contactDetailsModel(data)
            await contactDetail.save()
            //We created an instance of the model contactDetailsModel and save the data onto it in MONGODB
        }
        else
            throw 'numbers should be unique'
    }
}

module.exports = ContactDetailsHelper