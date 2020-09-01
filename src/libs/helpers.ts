import bcrypt from 'bcryptjs';
const helpers = {
    encriptPassword: async (password: any) => {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    },
    matchPassword: async (password: any, savedpassword: any) => {
        try {
            return await bcrypt.compare(password, savedpassword);
        } catch (error) {
            console.log('Error ', error);
        }
        return false;
    }

};

export default module.exports = helpers;