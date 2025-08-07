import EmployeeModel from "../db/models/EmployeeModel";

export class Employee {
  async getById(id: number) {
    return await EmployeeModel.findOne({ id });
  }

  async getAll() {
    return await EmployeeModel.find();
  }

  async create(data: { name: string; profession: string }) {
    const lastEmployee = await EmployeeModel.findOne().sort({ id: -1 });
    const newId = lastEmployee ? lastEmployee.id + 1 : 1; 
    const employeeData = {...data, id: newId}

    return await EmployeeModel.create(employeeData);
  }

  async updateById(
    id: number,
    data: Partial<{ name: string; profession: string }>
  ) {
    return await EmployeeModel.findOneAndUpdate({ id }, data, { new: true });
  }

  async deleteAll(){
    return await EmployeeModel.deleteMany()
  }
}
