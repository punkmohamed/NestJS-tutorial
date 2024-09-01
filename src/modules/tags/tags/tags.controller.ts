import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { TagsService } from './tags.service';
import { GuardGuard } from 'src/core/guard/guard.guard';

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
    @UseGuards(GuardGuard)
    addTags(@Body() body: any, @Req() req: string) {
        return this._tagService.addTag(body, req['userId'])
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
