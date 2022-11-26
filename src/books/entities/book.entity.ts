import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column({ nullable: false })
  title: string;
  @Column({
    nullable: false,
    type: 'date',
  })
  dateParution: string;
}
