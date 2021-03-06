from django.conf.urls import url

from . import views

app_name = 'PW'
urlpatterns = [
    url(r'^$', views.home, name='home'),
    url(r'^apps/$', views.app_overview, name="app_overview"),
    url(r'^about/', views.about, name='about'),
    url(r'^projects/', views.projects, name='projects'),
    url(r'^memory/', views.memory, name='memory'),
    url(r'^encryption/', views.encryption, name='encryption'),
    url(r'^ws_nn/', views.ws_nn, name='ws_nn'),
    url(r'^drinks/', views.drinks_rememberer, name="drinks_rememberer")
]
