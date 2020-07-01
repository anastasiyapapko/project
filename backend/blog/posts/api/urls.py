# from posts.api.views import PostViewSet
# from rest_framework.routers import DefaultRouter

# router = DefaultRouter()
# router.register(r'', PostViewSet, basename='posts')
# urlpatterns = router.urls

from posts.api.views import PostViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', PostViewSet, basename='posts')
urlpatterns = router.urls


# from django.urls import path

# from .views import (PostListView,PostDetailView)


# urlpatterns = [
#     path('',PostListView.as_view()),
#     path('<pk>', PostDetailView.as_view()),
# ]