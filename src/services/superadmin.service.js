import SuperAdmin from "../models/superadmin.models.js";

export const superadminAll = async () => {
  try {
    const superAdmin = await SuperAdmin.find();

    if (!superAdmin) {
      return {
        ok: false,
        values: "",
        message: "Not Found",
        status: 404,
      };
    }

    return {
      ok: true,
      values: superAdmin,
      message: "",
      status: 200,
    };
  } catch (error) {
    console.log(error);

    return {
      ok: false,
      values: "",
      message: error.message,
      status: 500,
    };
  }
};

export const superadminOne = async (id) => {
  try {
    const superAdmin = await SuperAdmin.findById(id);

    if (!superAdmin) {
      return {
        ok: false,
        values: "",
        message: "Not Found",
        status: 404,
      };
    }

    return {
      ok: true,
      values: superAdmin,
      message: "",
      status: 200,
    };
  } catch (error) {
    console.log(error);

    return {
      ok: false,
      values: "",
      message: error.message,
      status: 500,
    };
  }
};

export const superadminUpdate = async (id, updSuper) => {
  try {
    const superAdmin = await SuperAdmin.findById(id);

    if (!superAdmin) {
      return {
        ok: false,
        values: "",
        message: "Not Found",
        status: 404,
      };
    }

    const updatedAdmin = await SuperAdmin.findByIdAndUpdate(id, updSuper, {
      new: true,
    });

    return {
      ok: true,
      values: updatedAdmin,
      message: "",
      status: 200,
    };
  } catch (error) {
    console.log(error);

    return {
      ok: false,
      values: "",
      message: error.message,
      status: 500,
    };
  }
};

export const superadminDelete = async (id) => {
  try {
    const superAdmin = await SuperAdmin.findById(id);

    if (!superAdmin) {
      return {
        ok: false,
        values: "",
        message: "Not Found",
        status: 404,
      };
    }

    await SuperAdmin.findByIdAndDelete(id);

    return {
      ok: true,
      values: "",
      message: "Successfully Deleted",
      status: 200,
    };
  } catch (error) {
    console.log(error);

    return {
      ok: false,
      values: "",
      message: error.message,
      status: 500,
    };
  }
};

export const superadminCreate = async (newSuperadmin) => {
  try {
    const { email } = newSuperadmin;

    const superAdmin = await SuperAdmin.findOne({ email });

    if (superAdmin) {
      return {
        ok: false,
        values: "",
        message: "Super admin already exist",
        status: 400,
      };
    }

    const newAdmin = new SuperAdmin(newSuperadmin);

    const adminSave = await newAdmin.save();

    return {
      ok: true,
      values: adminSave,
      message: "",
      status: 201,
    };
  } catch (error) {
    console.log(error);

    return {
      ok: false,
      values: "",
      message: error.message,
      status: 500,
    };
  }
};
