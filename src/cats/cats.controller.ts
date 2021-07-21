import { Controller, Get, Post, Body, Param, HttpException, HttpStatus, UseFilters, ForbiddenException, ParseIntPipe, UsePipes } from "@nestjs/common";
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { HttpExceptionFilter } from "src/common/filters/http-exception.filter";
import { JoiValidationPipe } from "src/common/pipes/validation.pipe";

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}
    
    @Post()
    @UsePipes(new JoiValidationPipe(createCatSchema));
    // @UseFilters(HttpExceptionFilter)
    async create(@Body() createCatDto: CreateCatDto) {
        throw new ForbiddenException();
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number){
        return this.catsService.findOne(id);
    }
}