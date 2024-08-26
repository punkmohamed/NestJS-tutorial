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
        return this._tagService.getaTag(id)
    }
    @Post()
    addTags(@Body() body: any) {
        return this._tagService.addTag(body)
    }
    @Put('/:id')
    updateTags(@Param('id') id: string, @Body() body: any) {
        return this._tagService.updateTag(id, body)
    }
    @Delete('/:id')
    deleteTags(@Param('id') id: string) {
        return this._tagService.deleteTag(id)
    }
}
