import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import F12Main from './F12Main';

import BackToWorkspace from './pages/BackToWorkspace';
import CalendarMonth from './pages/CalendarMonth';
import CalendarMonth1 from './pages/CalendarMonth1';
import CalendarMonth2 from './pages/CalendarMonth2';
import CalendarMonth3 from './pages/CalendarMonth3';
import CalendarMonth4 from './pages/CalendarMonth4';
import CalendarMonth5 from './pages/CalendarMonth5';
import CalendarMonth6 from './pages/CalendarMonth6';
import CalendarMonth7 from './pages/CalendarMonth7';
import CalendarWeek from './pages/CalendarWeek';
import CalendarWeek1 from './pages/CalendarWeek1';
import CalendarWeek2 from './pages/CalendarWeek2';
import CheckMailPopUp from './pages/CheckMailPopUp';
import ChevronDown3 from './pages/ChevronDown3';
import ChooseProjectTableTitle from './pages/ChooseProjectTableTitle';
import ChooseProjectTableTitle1 from './pages/ChooseProjectTableTitle1';
import Component2 from './pages/Component2';
import Component3 from './pages/Component3';
import CreateEvent from './pages/CreateEvent';
import CreateNewEvent from './pages/CreateNewEvent';
import CreateNewProject from './pages/CreateNewProject';
import Dashboard from './pages/Dashboard';
import DashboardListProject from './pages/DashboardListProject';
import DashboardOverviewCompleted from './pages/DashboardOverviewCompleted';
import DateDesign from './pages/DateDesign';
import EventDetailUiMotion from './pages/EventDetailUiMotion';
import EventDetailUiMotion1 from './pages/EventDetailUiMotion1';
import EventDetailUiMotion2 from './pages/EventDetailUiMotion2';
import EventDetailUiMotion3 from './pages/EventDetailUiMotion3';
import EventDetailUiMotion4 from './pages/EventDetailUiMotion4';
import EventDetailUiMotion5 from './pages/EventDetailUiMotion5';
import EventDetailUiMotion6 from './pages/EventDetailUiMotion6';
import EventDetailUiMotion7 from './pages/EventDetailUiMotion7';
import ForgotPasswordStep1 from './pages/ForgotPasswordStep1';
import FormCreateNew from './pages/FormCreateNew';
import FormCreateNew1 from './pages/FormCreateNew1';
import Frame1000002751 from './pages/Frame1000002751';
import Frame1000002787 from './pages/Frame1000002787';
import Frame1000002789 from './pages/Frame1000002789';
import Frame1000002790 from './pages/Frame1000002790';
import Frame1000002797 from './pages/Frame1000002797';
import Frame1000002798 from './pages/Frame1000002798';
import Frame1000002799 from './pages/Frame1000002799';
import Frame1000002800 from './pages/Frame1000002800';
import Frame1000002801 from './pages/Frame1000002801';
import Frame1000002802 from './pages/Frame1000002802';
import Frame1000002803 from './pages/Frame1000002803';
import Frame1000002804 from './pages/Frame1000002804';
import Frame1000002805 from './pages/Frame1000002805';
import Frame1000002806 from './pages/Frame1000002806';
import Frame1000002807 from './pages/Frame1000002807';
import Frame1000002808 from './pages/Frame1000002808';
import Frame1000002821 from './pages/Frame1000002821';
import Frame1000002822 from './pages/Frame1000002822';
import Frame1000002823 from './pages/Frame1000002823';
import Frame1000002824 from './pages/Frame1000002824';
import Frame1000002825 from './pages/Frame1000002825';
import Frame1000002826 from './pages/Frame1000002826';
import Frame1000002827 from './pages/Frame1000002827';
import Frame1000002828 from './pages/Frame1000002828';
import Frame1000002829 from './pages/Frame1000002829';
import Frame1000002830 from './pages/Frame1000002830';
import Frame1000002831 from './pages/Frame1000002831';
import Frame1000002832 from './pages/Frame1000002832';
import Frame1000002858 from './pages/Frame1000002858';
import Group1000002822 from './pages/Group1000002822';
import Group1000002823 from './pages/Group1000002823';
import Homepage from './pages/Homepage';
import InputFullNameuser1 from './pages/InputFullNameuser1';
import KpiDetailsMobile from './pages/KpiDetailsMobile';
import KpiPage from './pages/KpiPage';
import Login from './pages/Login';
import LoginMobiletm from './pages/LoginMobiletm';
import Logo from './pages/Logo';
import MainScreenMobile from './pages/MainScreenMobile';
import MyTasks from './pages/MyTasks';
import NativeUpsell from './pages/NativeUpsell';
import NotiCreateTask from './pages/NotiCreateTask';
import NotiCreateTask1 from './pages/NotiCreateTask1';
import NotiCreateTask2 from './pages/NotiCreateTask2';
import NotiCreateTask3 from './pages/NotiCreateTask3';
import NotiCreateTask4 from './pages/NotiCreateTask4';
import NotiCreateTask5 from './pages/NotiCreateTask5';
import PickDueDate from './pages/PickDueDate';
import PopUpInviteMember from './pages/PopUpInviteMember';
import PopUpVerifycationCode from './pages/PopUpVerifycationCode';
import PopUpVerifycationCode1 from './pages/PopUpVerifycationCode1';
import Project from './pages/Project';
import ProjectDetail from './pages/ProjectDetail';
import Property1Default from './pages/Property1Default';
import Property1Default1 from './pages/Property1Default1';
import Property1Default10 from './pages/Property1Default10';
import Property1Default11 from './pages/Property1Default11';
import Property1Default12 from './pages/Property1Default12';
import Property1Default13 from './pages/Property1Default13';
import Property1Default14 from './pages/Property1Default14';
import Property1Default15 from './pages/Property1Default15';
import Property1Default16 from './pages/Property1Default16';
import Property1Default17 from './pages/Property1Default17';
import Property1Default18 from './pages/Property1Default18';
import Property1Default19 from './pages/Property1Default19';
import Property1Default2 from './pages/Property1Default2';
import Property1Default20 from './pages/Property1Default20';
import Property1Default21 from './pages/Property1Default21';
import Property1Default22 from './pages/Property1Default22';
import Property1Default23 from './pages/Property1Default23';
import Property1Default24 from './pages/Property1Default24';
import Property1Default25 from './pages/Property1Default25';
import Property1Default26 from './pages/Property1Default26';
import Property1Default27 from './pages/Property1Default27';
import Property1Default28 from './pages/Property1Default28';
import Property1Default29 from './pages/Property1Default29';
import Property1Default3 from './pages/Property1Default3';
import Property1Default30 from './pages/Property1Default30';
import Property1Default31 from './pages/Property1Default31';
import Property1Default32 from './pages/Property1Default32';
import Property1Default33 from './pages/Property1Default33';
import Property1Default34 from './pages/Property1Default34';
import Property1Default35 from './pages/Property1Default35';
import Property1Default36 from './pages/Property1Default36';
import Property1Default37 from './pages/Property1Default37';
import Property1Default38 from './pages/Property1Default38';
import Property1Default39 from './pages/Property1Default39';
import Property1Default4 from './pages/Property1Default4';
import Property1Default40 from './pages/Property1Default40';
import Property1Default41 from './pages/Property1Default41';
import Property1Default42 from './pages/Property1Default42';
import Property1Default43 from './pages/Property1Default43';
import Property1Default44 from './pages/Property1Default44';
import Property1Default45 from './pages/Property1Default45';
import Property1Default46 from './pages/Property1Default46';
import Property1Default47 from './pages/Property1Default47';
import Property1Default48 from './pages/Property1Default48';
import Property1Default49 from './pages/Property1Default49';
import Property1Default5 from './pages/Property1Default5';
import Property1Default50 from './pages/Property1Default50';
import Property1Default51 from './pages/Property1Default51';
import Property1Default52 from './pages/Property1Default52';
import Property1Default53 from './pages/Property1Default53';
import Property1Default54 from './pages/Property1Default54';
import Property1Default55 from './pages/Property1Default55';
import Property1Default56 from './pages/Property1Default56';
import Property1Default57 from './pages/Property1Default57';
import Property1Default58 from './pages/Property1Default58';
import Property1Default59 from './pages/Property1Default59';
import Property1Default6 from './pages/Property1Default6';
import Property1Default7 from './pages/Property1Default7';
import Property1Default8 from './pages/Property1Default8';
import Property1Default9 from './pages/Property1Default9';
import Property1Frame251 from './pages/Property1Frame251';
import Property1Frame2511 from './pages/Property1Frame2511';
import Property1Hover from './pages/Property1Hover';
import Property1RegularProperty2Light from './pages/Property1RegularProperty2Light';
import Property1RegularProperty2Light1 from './pages/Property1RegularProperty2Light1';
import Property1RegularProperty2Light2 from './pages/Property1RegularProperty2Light2';
import Property1Selected from './pages/Property1Selected';
import Property1SelectedHover from './pages/Property1SelectedHover';
import Property1Status from './pages/Property1Status';
import Property1Status1 from './pages/Property1Status1';
import Property1Status11 from './pages/Property1Status11';
import Property1Status12 from './pages/Property1Status12';
import Property1Status1Hover from './pages/Property1Status1Hover';
import Property1Status1Hover1 from './pages/Property1Status1Hover1';
import Property1Status1Hover2 from './pages/Property1Status1Hover2';
import Property1Status2 from './pages/Property1Status2';
import Property1Status21 from './pages/Property1Status21';
import Property1Status22 from './pages/Property1Status22';
import Property1Status2Hover from './pages/Property1Status2Hover';
import Property1Status2Hover1 from './pages/Property1Status2Hover1';
import Property1Status2Hover2 from './pages/Property1Status2Hover2';
import Property1Status3 from './pages/Property1Status3';
import Property1Status31 from './pages/Property1Status31';
import Property1Status32 from './pages/Property1Status32';
import Property1Status3Hover from './pages/Property1Status3Hover';
import Property1Status3Hover1 from './pages/Property1Status3Hover1';
import Property1Status3Hover2 from './pages/Property1Status3Hover2';
import Property1Status4 from './pages/Property1Status4';
import Property1StatusHover from './pages/Property1StatusHover';
import Property1StatusHover1 from './pages/Property1StatusHover1';
import Property1StatusHover2 from './pages/Property1StatusHover2';
import Property1Variant2 from './pages/Property1Variant2';
import Property1Variant21 from './pages/Property1Variant21';
import Property1Variant210 from './pages/Property1Variant210';
import Property1Variant211 from './pages/Property1Variant211';
import Property1Variant212 from './pages/Property1Variant212';
import Property1Variant213 from './pages/Property1Variant213';
import Property1Variant214 from './pages/Property1Variant214';
import Property1Variant215 from './pages/Property1Variant215';
import Property1Variant216 from './pages/Property1Variant216';
import Property1Variant217 from './pages/Property1Variant217';
import Property1Variant218 from './pages/Property1Variant218';
import Property1Variant219 from './pages/Property1Variant219';
import Property1Variant22 from './pages/Property1Variant22';
import Property1Variant220 from './pages/Property1Variant220';
import Property1Variant221 from './pages/Property1Variant221';
import Property1Variant222 from './pages/Property1Variant222';
import Property1Variant223 from './pages/Property1Variant223';
import Property1Variant224 from './pages/Property1Variant224';
import Property1Variant225 from './pages/Property1Variant225';
import Property1Variant226 from './pages/Property1Variant226';
import Property1Variant227 from './pages/Property1Variant227';
import Property1Variant228 from './pages/Property1Variant228';
import Property1Variant229 from './pages/Property1Variant229';
import Property1Variant23 from './pages/Property1Variant23';
import Property1Variant230 from './pages/Property1Variant230';
import Property1Variant231 from './pages/Property1Variant231';
import Property1Variant232 from './pages/Property1Variant232';
import Property1Variant233 from './pages/Property1Variant233';
import Property1Variant234 from './pages/Property1Variant234';
import Property1Variant235 from './pages/Property1Variant235';
import Property1Variant236 from './pages/Property1Variant236';
import Property1Variant237 from './pages/Property1Variant237';
import Property1Variant238 from './pages/Property1Variant238';
import Property1Variant239 from './pages/Property1Variant239';
import Property1Variant24 from './pages/Property1Variant24';
import Property1Variant240 from './pages/Property1Variant240';
import Property1Variant241 from './pages/Property1Variant241';
import Property1Variant242 from './pages/Property1Variant242';
import Property1Variant243 from './pages/Property1Variant243';
import Property1Variant244 from './pages/Property1Variant244';
import Property1Variant245 from './pages/Property1Variant245';
import Property1Variant246 from './pages/Property1Variant246';
import Property1Variant247 from './pages/Property1Variant247';
import Property1Variant248 from './pages/Property1Variant248';
import Property1Variant249 from './pages/Property1Variant249';
import Property1Variant25 from './pages/Property1Variant25';
import Property1Variant250 from './pages/Property1Variant250';
import Property1Variant251 from './pages/Property1Variant251';
import Property1Variant26 from './pages/Property1Variant26';
import Property1Variant27 from './pages/Property1Variant27';
import Property1Variant28 from './pages/Property1Variant28';
import Property1Variant29 from './pages/Property1Variant29';
import Property1Variant3 from './pages/Property1Variant3';
import Property1Variant31 from './pages/Property1Variant31';
import Property1Variant310 from './pages/Property1Variant310';
import Property1Variant311 from './pages/Property1Variant311';
import Property1Variant312 from './pages/Property1Variant312';
import Property1Variant313 from './pages/Property1Variant313';
import Property1Variant314 from './pages/Property1Variant314';
import Property1Variant315 from './pages/Property1Variant315';
import Property1Variant32 from './pages/Property1Variant32';
import Property1Variant33 from './pages/Property1Variant33';
import Property1Variant34 from './pages/Property1Variant34';
import Property1Variant35 from './pages/Property1Variant35';
import Property1Variant36 from './pages/Property1Variant36';
import Property1Variant37 from './pages/Property1Variant37';
import Property1Variant38 from './pages/Property1Variant38';
import Property1Variant39 from './pages/Property1Variant39';
import Property1Variant4 from './pages/Property1Variant4';
import Property1Variant41 from './pages/Property1Variant41';
import Property1Variant42 from './pages/Property1Variant42';
import Property1Variant43 from './pages/Property1Variant43';
import Property1Variant44 from './pages/Property1Variant44';
import Property1Variant45 from './pages/Property1Variant45';
import Property1Variant5 from './pages/Property1Variant5';
import Property1Variant51 from './pages/Property1Variant51';
import Property1Variant52 from './pages/Property1Variant52';
import Property1Variant53 from './pages/Property1Variant53';
import Property1Variant54 from './pages/Property1Variant54';
import Property1Variant6 from './pages/Property1Variant6';
import Property1Variant61 from './pages/Property1Variant61';
import Property1Variant62 from './pages/Property1Variant62';
import Property1Variant63 from './pages/Property1Variant63';
import Property1Variant7 from './pages/Property1Variant7';
import Property1Variant71 from './pages/Property1Variant71';
import Property1WorkflowOption from './pages/Property1WorkflowOption';
import Property1WorkflowOption1 from './pages/Property1WorkflowOption1';
import Property1WorkflowOption11 from './pages/Property1WorkflowOption11';
import Property1WorkflowOption12 from './pages/Property1WorkflowOption12';
import Property1WorkflowOption2 from './pages/Property1WorkflowOption2';
import Property1WorkflowOption21 from './pages/Property1WorkflowOption21';
import Property1WorkflowOption22 from './pages/Property1WorkflowOption22';
import Property1WorkflowOption3 from './pages/Property1WorkflowOption3';
import Property1WorkflowOption31 from './pages/Property1WorkflowOption31';
import Property1WorkflowOption32 from './pages/Property1WorkflowOption32';
import Property1WorkflowOption4 from './pages/Property1WorkflowOption4';
import RegisterMobile from './pages/RegisterMobile';
import RequestAddMember from './pages/RequestAddMember';
import RequestAddMember1 from './pages/RequestAddMember1';
import SbItem from './pages/SbItem';
import Searching from './pages/Searching';
import Setting from './pages/Setting';
import Sidebar from './pages/Sidebar';
import Signup from './pages/Signup';
import StateDefault from './pages/StateDefault';
import StateDefault1 from './pages/StateDefault1';
import StateHover from './pages/StateHover';
import StateHover1 from './pages/StateHover1';
import StateOpen from './pages/StateOpen';
import StateState4 from './pages/StateState4';
import StateState5 from './pages/StateState5';
import StateState6 from './pages/StateState6';
import StateState7 from './pages/StateState7';
import StateState8 from './pages/StateState8';
import StateState9 from './pages/StateState9';
import Support from './pages/Support';
import TitleOfAlocation from './pages/TitleOfAlocation';
import User2 from './pages/User2';
import Workspace from './pages/Workspace';


const router = createBrowserRouter([
  { path: '/', element: <F12Main /> },
  { path: '/BackToWorkspace', element: <BackToWorkspace /> },
  { path: '/CalendarMonth', element: <CalendarMonth /> },
  { path: '/CalendarMonth1', element: <CalendarMonth1 /> },
  { path: '/CalendarMonth2', element: <CalendarMonth2 /> },
  { path: '/CalendarMonth3', element: <CalendarMonth3 /> },
  { path: '/CalendarMonth4', element: <CalendarMonth4 /> },
  { path: '/CalendarMonth5', element: <CalendarMonth5 /> },
  { path: '/CalendarMonth6', element: <CalendarMonth6 /> },
  { path: '/CalendarMonth7', element: <CalendarMonth7 /> },
  { path: '/CalendarWeek', element: <CalendarWeek /> },
  { path: '/CalendarWeek1', element: <CalendarWeek1 /> },
  { path: '/CalendarWeek2', element: <CalendarWeek2 /> },
  { path: '/CheckMailPopUp', element: <CheckMailPopUp /> },
  { path: '/ChevronDown3', element: <ChevronDown3 /> },
  { path: '/ChooseProjectTableTitle', element: <ChooseProjectTableTitle /> },
  { path: '/ChooseProjectTableTitle1', element: <ChooseProjectTableTitle1 /> },
  { path: '/Component2', element: <Component2 /> },
  { path: '/Component3', element: <Component3 /> },
  { path: '/CreateEvent', element: <CreateEvent /> },
  { path: '/CreateNewEvent', element: <CreateNewEvent /> },
  { path: '/CreateNewProject', element: <CreateNewProject /> },
  { path: '/Dashboard', element: <Dashboard /> },
  { path: '/DashboardListProject', element: <DashboardListProject /> },
  { path: '/DashboardOverviewCompleted', element: <DashboardOverviewCompleted /> },
  { path: '/DateDesign', element: <DateDesign /> },
  { path: '/EventDetailUiMotion', element: <EventDetailUiMotion /> },
  { path: '/EventDetailUiMotion1', element: <EventDetailUiMotion1 /> },
  { path: '/EventDetailUiMotion2', element: <EventDetailUiMotion2 /> },
  { path: '/EventDetailUiMotion3', element: <EventDetailUiMotion3 /> },
  { path: '/EventDetailUiMotion4', element: <EventDetailUiMotion4 /> },
  { path: '/EventDetailUiMotion5', element: <EventDetailUiMotion5 /> },
  { path: '/EventDetailUiMotion6', element: <EventDetailUiMotion6 /> },
  { path: '/EventDetailUiMotion7', element: <EventDetailUiMotion7 /> },
  { path: '/ForgotPasswordStep1', element: <ForgotPasswordStep1 /> },
  { path: '/FormCreateNew', element: <FormCreateNew /> },
  { path: '/FormCreateNew1', element: <FormCreateNew1 /> },
  { path: '/Frame1000002751', element: <Frame1000002751 /> },
  { path: '/Frame1000002787', element: <Frame1000002787 /> },
  { path: '/Frame1000002789', element: <Frame1000002789 /> },
  { path: '/Frame1000002790', element: <Frame1000002790 /> },
  { path: '/Frame1000002797', element: <Frame1000002797 /> },
  { path: '/Frame1000002798', element: <Frame1000002798 /> },
  { path: '/Frame1000002799', element: <Frame1000002799 /> },
  { path: '/Frame1000002800', element: <Frame1000002800 /> },
  { path: '/Frame1000002801', element: <Frame1000002801 /> },
  { path: '/Frame1000002802', element: <Frame1000002802 /> },
  { path: '/Frame1000002803', element: <Frame1000002803 /> },
  { path: '/Frame1000002804', element: <Frame1000002804 /> },
  { path: '/Frame1000002805', element: <Frame1000002805 /> },
  { path: '/Frame1000002806', element: <Frame1000002806 /> },
  { path: '/Frame1000002807', element: <Frame1000002807 /> },
  { path: '/Frame1000002808', element: <Frame1000002808 /> },
  { path: '/Frame1000002821', element: <Frame1000002821 /> },
  { path: '/Frame1000002822', element: <Frame1000002822 /> },
  { path: '/Frame1000002823', element: <Frame1000002823 /> },
  { path: '/Frame1000002824', element: <Frame1000002824 /> },
  { path: '/Frame1000002825', element: <Frame1000002825 /> },
  { path: '/Frame1000002826', element: <Frame1000002826 /> },
  { path: '/Frame1000002827', element: <Frame1000002827 /> },
  { path: '/Frame1000002828', element: <Frame1000002828 /> },
  { path: '/Frame1000002829', element: <Frame1000002829 /> },
  { path: '/Frame1000002830', element: <Frame1000002830 /> },
  { path: '/Frame1000002831', element: <Frame1000002831 /> },
  { path: '/Frame1000002832', element: <Frame1000002832 /> },
  { path: '/Frame1000002858', element: <Frame1000002858 /> },
  { path: '/Group1000002822', element: <Group1000002822 /> },
  { path: '/Group1000002823', element: <Group1000002823 /> },
  { path: '/Homepage', element: <Homepage /> },
  { path: '/InputFullNameuser1', element: <InputFullNameuser1 /> },
  { path: '/KpiDetailsMobile', element: <KpiDetailsMobile /> },
  { path: '/KpiPage', element: <KpiPage /> },
  { path: '/Login', element: <Login /> },
  { path: '/LoginMobiletm', element: <LoginMobiletm /> },
  { path: '/Logo', element: <Logo /> },
  { path: '/MainScreenMobile', element: <MainScreenMobile /> },
  { path: '/MyTasks', element: <MyTasks /> },
  { path: '/NativeUpsell', element: <NativeUpsell /> },
  { path: '/NotiCreateTask', element: <NotiCreateTask /> },
  { path: '/NotiCreateTask1', element: <NotiCreateTask1 /> },
  { path: '/NotiCreateTask2', element: <NotiCreateTask2 /> },
  { path: '/NotiCreateTask3', element: <NotiCreateTask3 /> },
  { path: '/NotiCreateTask4', element: <NotiCreateTask4 /> },
  { path: '/NotiCreateTask5', element: <NotiCreateTask5 /> },
  { path: '/PickDueDate', element: <PickDueDate /> },
  { path: '/PopUpInviteMember', element: <PopUpInviteMember /> },
  { path: '/PopUpVerifycationCode', element: <PopUpVerifycationCode /> },
  { path: '/PopUpVerifycationCode1', element: <PopUpVerifycationCode1 /> },
  { path: '/Project', element: <Project /> },
  { path: '/ProjectDetail', element: <ProjectDetail /> },
  { path: '/Property1Default', element: <Property1Default /> },
  { path: '/Property1Default1', element: <Property1Default1 /> },
  { path: '/Property1Default10', element: <Property1Default10 /> },
  { path: '/Property1Default11', element: <Property1Default11 /> },
  { path: '/Property1Default12', element: <Property1Default12 /> },
  { path: '/Property1Default13', element: <Property1Default13 /> },
  { path: '/Property1Default14', element: <Property1Default14 /> },
  { path: '/Property1Default15', element: <Property1Default15 /> },
  { path: '/Property1Default16', element: <Property1Default16 /> },
  { path: '/Property1Default17', element: <Property1Default17 /> },
  { path: '/Property1Default18', element: <Property1Default18 /> },
  { path: '/Property1Default19', element: <Property1Default19 /> },
  { path: '/Property1Default2', element: <Property1Default2 /> },
  { path: '/Property1Default20', element: <Property1Default20 /> },
  { path: '/Property1Default21', element: <Property1Default21 /> },
  { path: '/Property1Default22', element: <Property1Default22 /> },
  { path: '/Property1Default23', element: <Property1Default23 /> },
  { path: '/Property1Default24', element: <Property1Default24 /> },
  { path: '/Property1Default25', element: <Property1Default25 /> },
  { path: '/Property1Default26', element: <Property1Default26 /> },
  { path: '/Property1Default27', element: <Property1Default27 /> },
  { path: '/Property1Default28', element: <Property1Default28 /> },
  { path: '/Property1Default29', element: <Property1Default29 /> },
  { path: '/Property1Default3', element: <Property1Default3 /> },
  { path: '/Property1Default30', element: <Property1Default30 /> },
  { path: '/Property1Default31', element: <Property1Default31 /> },
  { path: '/Property1Default32', element: <Property1Default32 /> },
  { path: '/Property1Default33', element: <Property1Default33 /> },
  { path: '/Property1Default34', element: <Property1Default34 /> },
  { path: '/Property1Default35', element: <Property1Default35 /> },
  { path: '/Property1Default36', element: <Property1Default36 /> },
  { path: '/Property1Default37', element: <Property1Default37 /> },
  { path: '/Property1Default38', element: <Property1Default38 /> },
  { path: '/Property1Default39', element: <Property1Default39 /> },
  { path: '/Property1Default4', element: <Property1Default4 /> },
  { path: '/Property1Default40', element: <Property1Default40 /> },
  { path: '/Property1Default41', element: <Property1Default41 /> },
  { path: '/Property1Default42', element: <Property1Default42 /> },
  { path: '/Property1Default43', element: <Property1Default43 /> },
  { path: '/Property1Default44', element: <Property1Default44 /> },
  { path: '/Property1Default45', element: <Property1Default45 /> },
  { path: '/Property1Default46', element: <Property1Default46 /> },
  { path: '/Property1Default47', element: <Property1Default47 /> },
  { path: '/Property1Default48', element: <Property1Default48 /> },
  { path: '/Property1Default49', element: <Property1Default49 /> },
  { path: '/Property1Default5', element: <Property1Default5 /> },
  { path: '/Property1Default50', element: <Property1Default50 /> },
  { path: '/Property1Default51', element: <Property1Default51 /> },
  { path: '/Property1Default52', element: <Property1Default52 /> },
  { path: '/Property1Default53', element: <Property1Default53 /> },
  { path: '/Property1Default54', element: <Property1Default54 /> },
  { path: '/Property1Default55', element: <Property1Default55 /> },
  { path: '/Property1Default56', element: <Property1Default56 /> },
  { path: '/Property1Default57', element: <Property1Default57 /> },
  { path: '/Property1Default58', element: <Property1Default58 /> },
  { path: '/Property1Default59', element: <Property1Default59 /> },
  { path: '/Property1Default6', element: <Property1Default6 /> },
  { path: '/Property1Default7', element: <Property1Default7 /> },
  { path: '/Property1Default8', element: <Property1Default8 /> },
  { path: '/Property1Default9', element: <Property1Default9 /> },
  { path: '/Property1Frame251', element: <Property1Frame251 /> },
  { path: '/Property1Frame2511', element: <Property1Frame2511 /> },
  { path: '/Property1Hover', element: <Property1Hover /> },
  { path: '/Property1RegularProperty2Light', element: <Property1RegularProperty2Light /> },
  { path: '/Property1RegularProperty2Light1', element: <Property1RegularProperty2Light1 /> },
  { path: '/Property1RegularProperty2Light2', element: <Property1RegularProperty2Light2 /> },
  { path: '/Property1Selected', element: <Property1Selected /> },
  { path: '/Property1SelectedHover', element: <Property1SelectedHover /> },
  { path: '/Property1Status', element: <Property1Status /> },
  { path: '/Property1Status1', element: <Property1Status1 /> },
  { path: '/Property1Status1', element: <Property1Status1 /> },
  { path: '/Property1Status11', element: <Property1Status11 /> },
  { path: '/Property1Status12', element: <Property1Status12 /> },
  { path: '/Property1Status1Hover', element: <Property1Status1Hover /> },
  { path: '/Property1Status1Hover1', element: <Property1Status1Hover1 /> },
  { path: '/Property1Status1Hover2', element: <Property1Status1Hover2 /> },
  { path: '/Property1Status2', element: <Property1Status2 /> },
  { path: '/Property1Status2', element: <Property1Status2 /> },
  { path: '/Property1Status21', element: <Property1Status21 /> },
  { path: '/Property1Status22', element: <Property1Status22 /> },
  { path: '/Property1Status2Hover', element: <Property1Status2Hover /> },
  { path: '/Property1Status2Hover1', element: <Property1Status2Hover1 /> },
  { path: '/Property1Status2Hover2', element: <Property1Status2Hover2 /> },
  { path: '/Property1Status3', element: <Property1Status3 /> },
  { path: '/Property1Status3', element: <Property1Status3 /> },
  { path: '/Property1Status31', element: <Property1Status31 /> },
  { path: '/Property1Status32', element: <Property1Status32 /> },
  { path: '/Property1Status3Hover', element: <Property1Status3Hover /> },
  { path: '/Property1Status3Hover1', element: <Property1Status3Hover1 /> },
  { path: '/Property1Status3Hover2', element: <Property1Status3Hover2 /> },
  { path: '/Property1Status4', element: <Property1Status4 /> },
  { path: '/Property1StatusHover', element: <Property1StatusHover /> },
  { path: '/Property1StatusHover1', element: <Property1StatusHover1 /> },
  { path: '/Property1StatusHover2', element: <Property1StatusHover2 /> },
  { path: '/Property1Variant2', element: <Property1Variant2 /> },
  { path: '/Property1Variant21', element: <Property1Variant21 /> },
  { path: '/Property1Variant210', element: <Property1Variant210 /> },
  { path: '/Property1Variant211', element: <Property1Variant211 /> },
  { path: '/Property1Variant212', element: <Property1Variant212 /> },
  { path: '/Property1Variant213', element: <Property1Variant213 /> },
  { path: '/Property1Variant214', element: <Property1Variant214 /> },
  { path: '/Property1Variant215', element: <Property1Variant215 /> },
  { path: '/Property1Variant216', element: <Property1Variant216 /> },
  { path: '/Property1Variant217', element: <Property1Variant217 /> },
  { path: '/Property1Variant218', element: <Property1Variant218 /> },
  { path: '/Property1Variant219', element: <Property1Variant219 /> },
  { path: '/Property1Variant22', element: <Property1Variant22 /> },
  { path: '/Property1Variant220', element: <Property1Variant220 /> },
  { path: '/Property1Variant221', element: <Property1Variant221 /> },
  { path: '/Property1Variant222', element: <Property1Variant222 /> },
  { path: '/Property1Variant223', element: <Property1Variant223 /> },
  { path: '/Property1Variant224', element: <Property1Variant224 /> },
  { path: '/Property1Variant225', element: <Property1Variant225 /> },
  { path: '/Property1Variant226', element: <Property1Variant226 /> },
  { path: '/Property1Variant227', element: <Property1Variant227 /> },
  { path: '/Property1Variant228', element: <Property1Variant228 /> },
  { path: '/Property1Variant229', element: <Property1Variant229 /> },
  { path: '/Property1Variant23', element: <Property1Variant23 /> },
  { path: '/Property1Variant230', element: <Property1Variant230 /> },
  { path: '/Property1Variant231', element: <Property1Variant231 /> },
  { path: '/Property1Variant232', element: <Property1Variant232 /> },
  { path: '/Property1Variant233', element: <Property1Variant233 /> },
  { path: '/Property1Variant234', element: <Property1Variant234 /> },
  { path: '/Property1Variant235', element: <Property1Variant235 /> },
  { path: '/Property1Variant236', element: <Property1Variant236 /> },
  { path: '/Property1Variant237', element: <Property1Variant237 /> },
  { path: '/Property1Variant238', element: <Property1Variant238 /> },
  { path: '/Property1Variant239', element: <Property1Variant239 /> },
  { path: '/Property1Variant24', element: <Property1Variant24 /> },
  { path: '/Property1Variant240', element: <Property1Variant240 /> },
  { path: '/Property1Variant241', element: <Property1Variant241 /> },
  { path: '/Property1Variant242', element: <Property1Variant242 /> },
  { path: '/Property1Variant243', element: <Property1Variant243 /> },
  { path: '/Property1Variant244', element: <Property1Variant244 /> },
  { path: '/Property1Variant245', element: <Property1Variant245 /> },
  { path: '/Property1Variant246', element: <Property1Variant246 /> },
  { path: '/Property1Variant247', element: <Property1Variant247 /> },
  { path: '/Property1Variant248', element: <Property1Variant248 /> },
  { path: '/Property1Variant249', element: <Property1Variant249 /> },
  { path: '/Property1Variant25', element: <Property1Variant25 /> },
  { path: '/Property1Variant250', element: <Property1Variant250 /> },
  { path: '/Property1Variant251', element: <Property1Variant251 /> },
  { path: '/Property1Variant26', element: <Property1Variant26 /> },
  { path: '/Property1Variant27', element: <Property1Variant27 /> },
  { path: '/Property1Variant28', element: <Property1Variant28 /> },
  { path: '/Property1Variant29', element: <Property1Variant29 /> },
  { path: '/Property1Variant3', element: <Property1Variant3 /> },
  { path: '/Property1Variant31', element: <Property1Variant31 /> },
  { path: '/Property1Variant310', element: <Property1Variant310 /> },
  { path: '/Property1Variant311', element: <Property1Variant311 /> },
  { path: '/Property1Variant312', element: <Property1Variant312 /> },
  { path: '/Property1Variant313', element: <Property1Variant313 /> },
  { path: '/Property1Variant314', element: <Property1Variant314 /> },
  { path: '/Property1Variant315', element: <Property1Variant315 /> },
  { path: '/Property1Variant32', element: <Property1Variant32 /> },
  { path: '/Property1Variant33', element: <Property1Variant33 /> },
  { path: '/Property1Variant34', element: <Property1Variant34 /> },
  { path: '/Property1Variant35', element: <Property1Variant35 /> },
  { path: '/Property1Variant36', element: <Property1Variant36 /> },
  { path: '/Property1Variant37', element: <Property1Variant37 /> },
  { path: '/Property1Variant38', element: <Property1Variant38 /> },
  { path: '/Property1Variant39', element: <Property1Variant39 /> },
  { path: '/Property1Variant4', element: <Property1Variant4 /> },
  { path: '/Property1Variant41', element: <Property1Variant41 /> },
  { path: '/Property1Variant42', element: <Property1Variant42 /> },
  { path: '/Property1Variant43', element: <Property1Variant43 /> },
  { path: '/Property1Variant44', element: <Property1Variant44 /> },
  { path: '/Property1Variant45', element: <Property1Variant45 /> },
  { path: '/Property1Variant5', element: <Property1Variant5 /> },
  { path: '/Property1Variant51', element: <Property1Variant51 /> },
  { path: '/Property1Variant52', element: <Property1Variant52 /> },
  { path: '/Property1Variant53', element: <Property1Variant53 /> },
  { path: '/Property1Variant54', element: <Property1Variant54 /> },
  { path: '/Property1Variant6', element: <Property1Variant6 /> },
  { path: '/Property1Variant61', element: <Property1Variant61 /> },
  { path: '/Property1Variant62', element: <Property1Variant62 /> },
  { path: '/Property1Variant63', element: <Property1Variant63 /> },
  { path: '/Property1Variant7', element: <Property1Variant7 /> },
  { path: '/Property1Variant71', element: <Property1Variant71 /> },
  { path: '/Property1WorkflowOption', element: <Property1WorkflowOption /> },
  { path: '/Property1WorkflowOption1', element: <Property1WorkflowOption1 /> },
  { path: '/Property1WorkflowOption1', element: <Property1WorkflowOption1 /> },
  { path: '/Property1WorkflowOption11', element: <Property1WorkflowOption11 /> },
  { path: '/Property1WorkflowOption12', element: <Property1WorkflowOption12 /> },
  { path: '/Property1WorkflowOption2', element: <Property1WorkflowOption2 /> },
  { path: '/Property1WorkflowOption2', element: <Property1WorkflowOption2 /> },
  { path: '/Property1WorkflowOption21', element: <Property1WorkflowOption21 /> },
  { path: '/Property1WorkflowOption22', element: <Property1WorkflowOption22 /> },
  { path: '/Property1WorkflowOption3', element: <Property1WorkflowOption3 /> },
  { path: '/Property1WorkflowOption3', element: <Property1WorkflowOption3 /> },
  { path: '/Property1WorkflowOption31', element: <Property1WorkflowOption31 /> },
  { path: '/Property1WorkflowOption32', element: <Property1WorkflowOption32 /> },
  { path: '/Property1WorkflowOption4', element: <Property1WorkflowOption4 /> },
  { path: '/RegisterMobile', element: <RegisterMobile /> },
  { path: '/RequestAddMember', element: <RequestAddMember /> },
  { path: '/RequestAddMember1', element: <RequestAddMember1 /> },
  { path: '/SbItem', element: <SbItem /> },
  { path: '/Searching', element: <Searching /> },
  { path: '/Setting', element: <Setting /> },
  { path: '/Sidebar', element: <Sidebar /> },
  { path: '/Signup', element: <Signup /> },
  { path: '/StateDefault', element: <StateDefault /> },
  { path: '/StateDefault1', element: <StateDefault1 /> },
  { path: '/StateHover', element: <StateHover /> },
  { path: '/StateHover1', element: <StateHover1 /> },
  { path: '/StateOpen', element: <StateOpen /> },
  { path: '/StateState4', element: <StateState4 /> },
  { path: '/StateState5', element: <StateState5 /> },
  { path: '/StateState6', element: <StateState6 /> },
  { path: '/StateState7', element: <StateState7 /> },
  { path: '/StateState8', element: <StateState8 /> },
  { path: '/StateState9', element: <StateState9 /> },
  { path: '/Support', element: <Support /> },
  { path: '/TitleOfAlocation', element: <TitleOfAlocation /> },
  { path: '/User2', element: <User2 /> },
  { path: '/Workspace', element: <Workspace /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}