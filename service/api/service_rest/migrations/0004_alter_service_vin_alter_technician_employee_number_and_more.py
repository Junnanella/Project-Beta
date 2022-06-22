# Generated by Django 4.0.3 on 2022-06-21 21:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0003_alter_automobilevo_vin'),
    ]

    operations = [
        migrations.AlterField(
            model_name='service',
            name='vin',
            field=models.CharField(max_length=200, unique=True),
        ),
        migrations.AlterField(
            model_name='technician',
            name='employee_number',
            field=models.IntegerField(null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='technician',
            name='name',
            field=models.CharField(max_length=200, unique=True),
        ),
    ]
