import axios from "axios";

const REST_API_BASE_URL = import.meta.env.VITE_REST_API_BASE_URL;

export const getEmpData = async () => {
    try {
        const res = await axios.get(REST_API_BASE_URL);
        return res.data;
    } catch (error) {
        console.log("Error while fetching emp data"+error);
        throw error;
    }
}

export const saveEmpData = async (employee) => {
    try {
        const res = await axios.post(REST_API_BASE_URL, employee);
        return res;
    } catch (error) {
        console.log("Error while adding emp data"+error);
        throw error;
    }
}

export const EmpData = async (employeeId) => {
    try {
        const res = await axios.get(REST_API_BASE_URL+"/"+employeeId);
        return res;
    } catch (error) {
        console.log("Error while getting single  Data"+error);
        throw error;
    }
}

export const updateEmpData = async (employeeId, employee) => {
    try {
        const res = await axios.put(REST_API_BASE_URL+"/"+employeeId, employee);
        return res;
    } catch (error) {
        console.log("Error while updating Employee data"+error);
        throw error;
    }
}

export const deleteEmpData = async (employeeId) => {
    try {
        const res = await axios.delete(REST_API_BASE_URL+"/"+employeeId);
        return res;
    } catch (error) {
        console.log("Error while deleting data"+error);
        throw error;
    }
}