import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { User } from "./user.schema";
import mongoose from "mongoose";



@Schema({ timestamps: true, versionKey: false })
export class Tag {
    @Prop({ required: true })
    title: string;


    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    createdBy: User;
}

export const TagSchema = SchemaFactory.createForClass(Tag)