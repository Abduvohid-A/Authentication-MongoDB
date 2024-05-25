import SuperAdmin from "../models/superadmin.models.js";


export const superadminAll = async () => {
    try {
        const superAdmin = await SuperAdmin.find();

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
            message: "Server Error",
            status: 500
        };
    };
};

export const superadminOne = async () => {
    try {
        const superAdmin = await SuperAdmin.find();

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
            message: "Server Error",
            status: 500
        };
    };
};

export const superadminUpdate = async () => {
    try {
        const superAdmin = await SuperAdmin.find();

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
            message: "Server Error",
            status: 500
        };
    };
};

export const superadminDelete = async () => {
    try {
        const superAdmin = await SuperAdmin.find();

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
            message: "Server Error",
            status: 500
        };
    };
};

export const superadminCreate = async () => {
    try {
        const superAdmin = await SuperAdmin.find();

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
            message: "Server Error",
            status: 500
        };
    };
};