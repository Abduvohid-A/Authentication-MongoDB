import Admin from "../models/admin.models.js";


export const adminsAll = async () => {
    try {
        const admins = await Admin.find();

        if (!admins) {
            return {
                ok: false,
                values: "",
                message: "Not Found",
                status: 404
            };
        };

        return {
            ok: true,
            values: admins,
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

export const adminOne = async (id) => {
    try {
        const admin = await Admin.findById(id);

        if (!admin) {
            return {
                ok: false,
                values: "",
                message: "Not Found",
                status: 404
            };
        };

        return {
            ok: true,
            values: admin,
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

export const adminUpdate = async (id, updAdmin) => {
    try {
        const existAdmin = await Admin.findById(id);

        if (!existAdmin) {
            return {
                ok: false,
                values: "",
                message: "Not Found",
                status: 404
            };
        };

        const newAdmin = await Admin.findByIdAndUpdate(id, updAdmin, { new : true});

        return {
            ok: true,
            values: newAdmin,
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

export const adminDel = async (id) => {
    try {
        const admin = await Admin.findById(id);

        if (!admin) {
            return {
                ok: false,
                values: "",
                message: "Not Found",
                status: 404
            };
        };
        await Admin.findByIdAndDelete(id);

        return {
            ok: true,
            values: "",
            message: "Successfully Deleted",
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