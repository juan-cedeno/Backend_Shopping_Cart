import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Products {
    
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    name: string

    @Column()
    price: number

    @Column({nullable: true})
    image: string
}