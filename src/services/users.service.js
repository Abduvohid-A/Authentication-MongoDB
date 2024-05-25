import Users from "../models/users.models.js";


export const usersAll = async () => {
    try {
        const users = await Users.find();

        if (!users) {
            return {
                ok: false,
                values: "",
                message: "Not Found",
                status: 404
            };
        };

        return {
            ok: true,
            values: users,
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

export const userOne = async (id) => {
    try {
        const user = await Users.findOne({_id : id});
        console.log(user)
        if (!user) {
            return {
                ok: false,
                values: "",
                message: "Not Found",
                status: 404
            };
        };

        return {
            ok: true,
            values: user,
            message: "",
            status: 200
        };


    } catch (error) {
        console.log(error);

        return {
            ok: false,
            values: "",
            message: error.message,
            status: 400
        };
    };
};

export const userUpdate = async (id, updUser) => {
    try {
        const existingUser = await Users.findById(id);

        if (!existingUser) {
            return {
                ok: false,
                values: "",
                message: "User not found",
                status: 404
            };
        };

        const updatedUser = await Users.findByIdAndUpdate(id, updUser, { new: true });

        return {
            ok: true,
            values: updatedUser,
            message: "",
            status: 200
        };

    } catch (error) {
        console.error(error);

        return {
            ok: false,
            values: "",
            message: error.message,
            status: 400
        };
    };
};

export const userDelete = async (id) => {
    try {
        const isExist = await Users.findOne({ _id : id });

        if (!isExist) {
            return {
                ok: false,
                values: "",
                message: "Not Found",
                status: 404
            };
        };

        await Users.findByIdAndDelete(id);

        return {
            ok: true,
            values: "",
            message: "User Deleted",
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

export const userCreate = async (newUser) => {
    try {
        const { email } = newUser;

        const userExist = await Users.findOne({email});

        if (userExist) {
            return {
                ok: false,
                values: "",
                message: "User already exist",
                status: 400
            };
        };

        const user = new Users(newUser);

        const saveUser = await user.save();

        return {
            ok: true,
            values: saveUser,
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