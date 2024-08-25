import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TagsService } from './tags.service';

@Controller('/tags')
export class TagsController {
    constructor(private readonly _tagService: TagsService) {

    }
    @Get()
    getAllTags() {
        return this._tagService.getAllTags()
    }
    @Get('/:id')
    getaTags(@Param('id') id: string) {
        return this._tagService.getaTags(id)
    }
    @Post()
    addTags(@Body() body: any) {
        return this._tagService.addTags(body)
    }
    @Put('/:id')
    updateTags(@Param('id') id: string, @Body() body: any) {
        return this._tagService.updateTags({ id, body })
    }
    @Delete('/:id')
    deleteTags(@Param('id') id: string) {
        return this._tagService.deleteTags(id)
    }

}
