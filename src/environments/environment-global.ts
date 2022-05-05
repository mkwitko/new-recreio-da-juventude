export const environmentGlobal = {
  api: {
    baseUrl: 'https://www.recreiodajuventude.com.br/api/',
    token: 'EZRJ7392',
    version: '2.5',
    controllers: {
      banner: 'home',
      bills: 'bills',
      callList: {
        index: 'call_list/index',
        hours: 'call_list/get_service_hours',
        students: 'call_list/get_students',
        save: 'call_list/save_call_list'
      },
      cartas: 'cartas/getCartas',
      common: 'common/content',
      contact: {
        subject: 'contact/subjects',
        upload: 'contact/upload_file',
        delete: 'contact/delete_file',
        send: 'contact/send',
        sendSac: 'contact/send_sac',
        sendAnswer: 'contact/send_answer',
        getFormInfo: 'contact/get_form_infos',
        getUserCalls: 'contact/get_user_calls',
        getCall: 'contact/get_call',
        getStatus: 'contact/get_status'
      },
      creditCard: 'credit-card/pay',
      dependentes: 'user/dependents',
      extract: 'extract',
      faq: 'faq',
      fields: {
        getAll: 'fields',
        getById: 'fields/details/',
        reserve: 'fields/reserve/',
        getSchedule: 'fields/schedule/'
      },
      headquarters: 'headquarters',
      invoices: {
        get: 'invoices',
        opened: 'invoices/opened',
        extract: 'invoices/extract'
      },
      meusTreinos: {
        get: 'meus_treinos/treinos',
        historico: 'meus_treinos/historico'
      },
      notification: {
        get: 'notifications/getNotification',
        getReceivedStatus: 'notifications/getReceivedStatus',
        schedulePushWelcome: 'notifications/schedule_push_welcome',
        getNofications: 'notifications/getNotifications',
        getUnreadCount: 'notifications/getUnreadCount',
        readAll: 'notifications/readAll',
        readNotification: 'notifications/read'
      },
      payment: 'payment/methods',
      reservations: {
        general: {
          get: 'reserves',
          cancelReserve: 'reserves/cancel'
        },
        pool: {
          getFreePools: 'reserves/pools',
          getPool: 'pools',
          reservePool: 'pools/reserve'
        },
        salon: {
          getSalons: 'reserves/get/salon',
          getSalonsDetails: 'salons/',
          checkSalonAvailability: 'salons/check-availability',
          reserveSalon: 'salon/reserve',
          confirmReserve: 'salons/finish'
        },
        kiosk: {
          getAllKiosk: 'reserves/get/kiosks/',
          getKioskById: 'kiosks/',
          reserveKiosk: 'kiosks/reserve/'
        },
        fitness: {
          getFitness: 'reserves/get/fitness'
        },
        school: {
          getSchools: 'reserves/get/schools',
          getSchool: 'schools/',
          reserveSchool: 'schools/reserve/'
        },
        gym: {
          getActivity: 'gym',
          reserveActivity: 'gym/reserve/'
        }
      },
      services:
      {
        get: 'services/categories/',
        getById: 'services/categories/',
        getCategoryServices: 'services/categories-services/',
        getPrices: 'services/prices/',
        getSchedule: 'services/schedule/',
        getPricesSchedule: 'services/prices-and-schedule',
        getContracted: 'services/contracted',
        cancelContract: 'services/cancel',
        renewContract: 'services/renew',
        contract: 'services/contract',
        sendSuggestTime: 'services/suggest-time'
      },
      authorization: {
        set: 'direito_imagem/setAutorizacao',
        getAutorizacao: 'direito_imagem/getAutorizacao',
        getPolitica: 'politica_de_privacidade'
      },
      tickets: {
        get: 'tickets',
        getAll: 'tickets/get_all_events',
        getMyTickets: 'tickets/my-tickets',
        getEventDetails: 'tickets/details/',
        getRelated: 'tickets/related/',
        createToken: 'tickets/buy',
        finishOrder: 'tickets/finish'
      },
      user: {
        getPhones: 'user/phones',
        getVaccinated: 'user/vaccinated',
        deleteComprovante: 'user/delete-comprovante',
        getPractices: 'practices',
        checkStudent: 'user/check_student',
        getTimeoutMapa: 'api_controller/get_timeout_mapa',
        updateAccount: 'user/edit',
        sendIframeError: 'user/iframe_error_mail',
        updateDeviceId: 'user/update-udid',
        checkDocument: 'user/check-document',
        login: 'user/login',
        changePassword: 'retrieve-password/change-password',
        forgotPassword: 'retrieve-password',
        checkHash: 'retrieve-password/check-hash',
        readFromPush: 'notifications/readFromPush',
        readFromCampaignPush: 'notifications/read-campaign',
        verify: 'user/verify',
        getTrackPermissionTime: 'trackTime',
        setTrackPermissionTime: 'trackTime',
        registerLocation: 'user/update-location'
      },
      waitList: {
        get: 'waitlist',
        leave: 'waitlist/leave',
        enter: 'waitlist/enter'
      }
    }
  },
  cache: {
    nivel1: {
      user: 'user'
    },
    nivelUserSupport: {
      notifications: 'notifications',
      contact: 'contact'
    },
    nivel2: {
      dependents: 'dependent'
    },
    nivel3: {
      managerEspacoLocalizacao: {
        selected: 'selected'
      }
    },
    nivel4: {
      fields: 'fields',
      pool: 'pool',
      salon: 'salon',
      kiosk: 'kiosk',
      fitness: 'fitness',
      school: 'school',
      gym: 'gym'
    },
    nivel5: {
      authorization: {
        politica: 'politica',
        aceite: 'aceite'
      },
      waitlist: 'waitlist',
      services: {
        categorias: 'categorias',
        contratados: 'contratados'
      },
      tickets: 'tickets'
    },
    nivel6: {
      letters: 'letters',
      common: 'common',
      faq: 'faq',
      headquarters: 'headquarters',
      payment: 'payment',
      banner: 'banner'
    }
  },
  chatBot: 'https://www.recreiodajuventude.com.br/chatbot',
  wpp: 'https://api.whatsapp.com/send?phone=555140421241',
  reservations: ['reservar-academia', 'reservar-quadra', 'reservar-piscina', 'reservar-escolinha']
};
