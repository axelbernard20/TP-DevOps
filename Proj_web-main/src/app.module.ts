import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AssociationsModule } from './associations/associations.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Association } from './associations/association.entity';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/roles.entity';
import { MinutesModule } from './minutes/minutes.module';
import { Minute } from './minutes/minute.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'mydatabase.db',
      entities: [User, Association, Role, Minute],
      synchronize: true,
    }),
    UsersModule,
    AssociationsModule,
    MinutesModule,
    AuthModule,
    RolesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
