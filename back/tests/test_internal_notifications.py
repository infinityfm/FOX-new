from rest_framework.test import APITestCase
from back.models import (
    Contractor,
    FoxUser,
    Company,
    ClientAdmin,
    ClientManager,
    Message,
    Notification,
    Project,
)
from back.services import InternalNotificationService


class InternalNotificationsTestCase(APITestCase):
    def setUp(self):
        company = Company.objects.create(name="Test company1")
        contractor = Contractor.objects.create(
            username="test1",
            password="password",
            email="lysak.ipr@gmail.com",
            role=Contractor.Role.contractor,
            related_company="Contr 1",
        )
        Project.objects.create(
            name="Test project1",
            description="Test description",
            company=company,
            contractor=contractor,
        )
        Project.objects.create(
            name="Test project2",
            description="Test description",
            company=company,
            contractor=contractor,
            status="Rejected",
        )
        Project.objects.create(
            name="Test project3",
            description="Test description",
            company=company,
            contractor=contractor,
            status="Works_started",
        )
        ClientAdmin.objects.create(
            username="test_admin1",
            password="ZAQ!XSW@",
            email="lysak.ipr@gmail.com",
            role=FoxUser.Role.client_admin,
        )
        ClientManager.objects.create(
            username="test_man1",
            password="ZAQ!XSW@",
            email="lysak.ipr@gmail.com",
            role=ClientManager.Role.client_manager,
            position=ClientManager.Position.safety_manager,
        )
        ClientManager.objects.create(
            username="test_man2",
            password="ZAQ!XSW@",
            email="lysak.ipr@gmail.com",
            role=ClientManager.Role.client_manager,
            position=ClientManager.Position.safety_manager,
        )

    def test_emit(self):
        message_text = "Test text"
        receivers = ClientManager.objects.all()
        notification_service = InternalNotificationService(message_text, receivers)
        notification_service.emit()
        notifications = Notification.objects.all()
        self.assertEqual(notifications.count(), 2)
        self.assertEqual(notifications[0].message.text, "Test text")
