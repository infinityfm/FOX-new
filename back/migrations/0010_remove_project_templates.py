# Generated by Django 3.1 on 2020-08-20 08:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('back', '0009_auto_20200820_1113'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='project',
            name='templates',
        ),
    ]
