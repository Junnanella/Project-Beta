# Generated by Django 4.0.3 on 2022-06-21 21:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0005_alter_technician_employee_number_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='automobilevo',
            name='vin',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='service',
            name='vin',
            field=models.CharField(max_length=200),
        ),
    ]
