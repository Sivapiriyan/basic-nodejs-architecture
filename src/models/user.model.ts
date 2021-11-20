/**
 * @author Lingeswaran Sivapiriyan
 * @email l.s.piriyan@gmail.com
 * @create date 2021-11-20 16:01:21
 * @modify date 2021-11-20 16:01:21
 * @desc [description]
 */
import { Table, Column, DataType, Model } from 'sequelize-typescript';

@Table({ underscored: true, tableName: 'user' })
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER({ length: 11 }),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  })
  public id!: number;
  @Column({
    type: DataType.STRING({ length: 45 }),
    allowNull: false
  })
  public userName!: string;
  @Column({
    type: DataType.STRING({ length: 45 }),
    allowNull: false
  })
  public email!: string;
  @Column({
    type: DataType.INTEGER({ length: 25 }),
    allowNull: false
  })
  public contactNumber!: number;
  @Column({
    type: DataType.STRING({ length: 45 }),
    allowNull: true
  })
  public password!: string;
  @Column({
    type: DataType.STRING({ length: 45 }),
    allowNull: true
  })
  public registerNumber!: string;
  @Column({
    type: DataType.DATE,
    allowNull: true
  })
  public expiryDate!: Date;
  @Column({
    type: DataType.DATE,
    allowNull: true
  })
  public dateOfBirth!: Date;
  @Column({
    type: DataType.TINYINT({ length: 1 }),
    allowNull: false
  })
  public twoFactorAuth!: number;
  @Column({
    type: DataType.TINYINT({ length: 1 }),
    allowNull: true
  })
  public active!: number;
  @Column({
    type: DataType.TINYINT({ length: 1 }),
    allowNull: false
  })
  public status!: number;
  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  public createdAt!: Date;
  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  public updatedAt!: Date;
  @Column({
    type: DataType.INTEGER({ length: 11 }),
    allowNull: false
  })
  public createdBy!: number;
  @Column({
    type: DataType.INTEGER({ length: 11 }),
    allowNull: true
  })
  public updatedBy!: number;
  @Column({
    type: DataType.INTEGER({ length: 11 }),
    allowNull: true
  })
  public otp!: number;
}
