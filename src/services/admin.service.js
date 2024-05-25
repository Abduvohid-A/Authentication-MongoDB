import Admin from "../models/admin.models.js";


export const adminsAll = async () => {
    try {
        const superAdmin = await Admin.find();

        if (!superAdmin) {
            return {
                ok: false,
                values: "",
                message: "Not Found",
                status: 404
            };
        };

        return {
            ok: true,
            values: superAdmin,
            message: "",
            status: 200
        };


    } catch (error) {
        console.log(error);

        return {
            ok: false,
            values: "",
            message: error.message,
            status: 500
        };
    };
};

export const adminOne = async () => {
    try {
        const superAdmin = await Admin.find();

        if (!superAdmin) {
            return {
                ok: false,
                values: "",
                message: "Not Found",
                status: 404
            };
        };

        return {
            ok: true,
            values: superAdmin,
            message: "",
            status: 200
        };


    } catch (error) {
        console.log(error);

        return {
            ok: false,
            values: "",
            message: error.message,
            status: 500
        };
    };
};

export const adminUpdate = async () => {
    try {
        const superAdmin = await Admin.find();

        if (!superAdmin) {
            return {
                ok: false,
                values: "",
                message: "Not Found",
                status: 404
            };
        };

        return {
            ok: true,
            values: superAdmin,
            message: "",
            status: 200
        };


    } catch (error) {
        console.log(error);

        return {
            ok: false,
            values: "",
            message: error.message,
            status: 500
        };
    };
};

export const adminDel = async () => {
    try {
        const superAdmin = await Admin.find();

        if (!superAdmin) {
            return {
                ok: false,
                values: "",
                message: "Not Found",
                status: 404
            };
        };

        return {
            ok: true,
            values: superAdmin,
            message: "",
            status: 200
        };


    } catch (error) {
        console.log(error);

        return {
            ok: false,
            values: "",
            message: error.message,
            status: 500
        };
    };
};

export const adminCreate = async (newAdmin) => {
    try {
        const { email } = newAdmin;

        const adminExist = await Admin.findOne({email});

        if (adminExist) {
            return {
                ok: false,
                values: "",
                message: "Admin already exist",
                status: 400
            };
        };

        const admin = new Admin(newAdmin);

        const saveAdmin = await admin.save();

        return {
            ok: true,
            values: saveAdmin,
            message: "",
            status: 201
        };


    } catch (error) {
        console.log(error);

        return {
            ok: false,
            values: "",
            message: error.message,
            status: 500
        };
    };
};