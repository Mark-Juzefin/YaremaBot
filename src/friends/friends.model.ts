import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface FriendCreationAttrs {
  name: string;
  age: number;
  phone: string;
}
@Table({ tableName: 'friends' })
export class Friend extends Model<Model, FriendCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  age: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone: string;
}
