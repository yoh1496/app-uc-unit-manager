// service_worker
const CACHE_NAME = 'v1';
const urlsToCache = [
  './css/cellProfileStylesheet.css',
  './css/commonStylesheet.css',
  './css/defaultTheme.css',
  './css/homeStylesheet.css',
  './css/japaneseStylesheet.css',
  './css/jquery.mCustomScrollbar.css',
  './css/layoutStylesheet.css',
  './css/loginStylesheet.css',
  './css/oDataStylesheet.css',
  './css/prettyPrintStylesheet.css',
  './css/serviceManagmentStyleSheet.css',
  './css/socialGraphStylesheet.css',
  './css/sprite1Stylesheet.css',
  './css/stylesheet.css',
  './environment.html',
  './en_uiProperties.json',
  './font/FujitsuSansRegular.eot',
  './font/FujitsuSansRegular.ttf',
  './font/segoe-ui-light.ttf',
  './images/box_grey.png',
  './images/box_red.png',
  './images/collection.png',
  './images/custom_radio.png',
  './images/expandCellListIcon.png',
  './images/fujitsu.gif',
  './images/green_icon.png',
  './images/greyCross.png',
  './images/hoverCross.png',
  './images/infoRetrivalFailed.png',
  './images/login_logo.png',
  './images/logo.png',
  './images/newSprite.png',
  './images/password.png',
  './images/profile_image.png',
  './images/profile_image_without_border.png',
  './images/sprite.png',
  './images/sprite3.png',
  './images/token_btn.png',
  './images/username.png',
  './ja_uiProperties.json',
  './js/boxAcl.js',
  './js/boxDetail.js',
  './js/boxInstall.js',
  './js/boxProperties.js',
  './js/cellAcl.js',
  './js/cellProfile.js',
  './js/common.js',
  './js/commonFunctions.js',
  './js/complexTypeProperty.js',
  './js/dataManagement.js',
  './js/entityTypeOperations.js',
  './js/entityTypeProperty.js',
  './js/externalCell.js',
  './js/externalCellToRelationMapping.js',
  './js/externalCellToRoleMapping.js',
  './js/externalRole.js',
  './js/externalRoleToRoleMapping.js',
  './js/fileDownload.js',
  './js/home.js',
  './js/informationStorage.js',
  './js/jquery-1.5.2.min.js',
  './js/jquery-1.9.0.min.js',
  './js/jquery.js',
  './js/jquery.mCustomScrollbar.concat.min.js',
  './js/jquery.modalbox.js',
  './js/log.js',
  './js/login.js',
  './js/main/core/AbstractODataContext.js',
  './js/main/core/Accessor.js',
  './js/main/core/Account.js',
  './js/main/core/AccountManager.js',
  './js/main/core/Ace.js',
  './js/main/core/Acl.js',
  './js/main/core/AclManager.js',
  './js/main/core/AssociationEnd.js',
  './js/main/core/AssociationEndManager.js',
  './js/main/core/Box.js',
  './js/main/core/BoxManager.js',
  './js/main/core/Cell.js',
  './js/main/core/CellManager.js',
  './js/main/core/ComplexTypeManager.js',
  './js/main/core/ComplexTypePropertyManager.js',
  './js/main/core/DaoConfig.js',
  './js/main/core/DaoException.js',
  './js/main/core/DavCollection.js',
  './js/main/core/DavResponse.js',
  './js/main/core/Entity.js',
  './js/main/core/EntityLink.js',
  './js/main/core/EntityLinkManager.js',
  './js/main/core/EntityManager.js',
  './js/main/core/EntitySet.js',
  './js/main/core/EntityType.js',
  './js/main/core/EntityTypeManager.js',
  './js/main/core/Event.js',
  './js/main/core/EventManager.js',
  './js/main/core/ExtCell.js',
  './js/main/core/ExtCellManager.js',
  './js/main/core/ExtRoleManager.js',
  './js/main/core/LinkManager.js',
  './js/main/core/Message.js',
  './js/main/core/MessageManager.js',
  './js/main/core/MetadataLinkManager.js',
  './js/main/core/ODataCollection.js',
  './js/main/core/ODataManager.js',
  './js/main/core/ODataResponse.js',
  './js/main/core/OwnerAccessor.js',
  './js/main/core/PersoniumCollection.js',
  './js/main/core/PersoniumContext.js',
  './js/main/core/PersoniumQuery.js',
  './js/main/core/Principal.js',
  './js/main/core/PropertyManager.js',
  './js/main/core/ReceivedMessageManager.js',
  './js/main/core/Relation.js',
  './js/main/core/RelationManager.js',
  './js/main/core/Role.js',
  './js/main/core/RoleManager.js',
  './js/main/core/Rule.js',
  './js/main/core/RuleManager.js',
  './js/main/core/SentMessageManager.js',
  './js/main/core/ServiceCollection.js',
  './js/main/core/UnitManager.js',
  './js/main/http/PersoniumHttpClient.js',
  './js/main/http/PersoniumRequestHeaderBuilder.js',
  './js/main/http/PersoniumResponse.js',
  './js/main/http/Promise.js',
  './js/main/http/RestAdapter.js',
  './js/main/http/RestAdapterFactory.js',
  './js/main/util/extend.js',
  './js/main/util/StringUtils.js',
  './js/main/util/UrlUtils.js',
  './js/main/validation/login_validation.js',
  './js/main/validation/reg_validation.js',
  './js/mainBoxAcl.js',
  './js/mainNavigation.js',
  './js/odata.js',
  './js/odataQuery.js',
  './js/prettify.js',
  './js/receivedMessage.js',
  './js/registerFileAsService.js',
  './js/relationToExternalCellMapping.js',
  './js/relationToRoleMapping.js',
  './js/roleAccountLink.js',
  './js/roleToAccountMapping.js',
  './js/roleToExtCell.js',
  './js/roleToExtRole.js',
  './js/roleToRelationMapping.js',
  './js/ruleDetail.js',
  './js/schemaManagement.js',
  './js/sentMessage.js',
  './js/snapshot.js',
  './js/spin.js',
  './js/uAccount.js',
  './js/uBox.js',
  './js/uCell.js',
  './js/uCellPopup.js',
  './js/uCollectionOdata.js',
  './js/uRelation.js',
  './js/uRole.js',
  './js/uRule.js',
  './login.html',
  './templates/en/accountListView.html',
  './templates/en/assignExternalCellNavigation.html',
  './templates/en/assignRelationNavigation.html',
  './templates/en/assignRoleNavigation.html',
  './templates/en/associationEnd.html',
  './templates/en/boxDetail.html',
  './templates/en/boxDetailContent.html',
  './templates/en/boxListView.html',
  './templates/en/cellAdministration.html',
  './templates/en/cellControlsInfo.html',
  './templates/en/cellInfoNavigation.html',
  './templates/en/cellListView.html',
  './templates/en/cellProfileInfo.html',
  './templates/en/dataManagement.html',
  './templates/en/externalCell.html',
  './templates/en/externalCellToRelationMapping.html',
  './templates/en/externalCellToRoleMapping.html',
  './templates/en/externalRoleListView.html',
  './templates/en/externalRoleToRoleMapping.html',
  './templates/en/log.html',
  './templates/en/ODataView.html',
  './templates/en/receivedMessage.html',
  './templates/en/relationListView.html',
  './templates/en/relationToExtCellMapping.html',
  './templates/en/relationToRoleMapping.html',
  './templates/en/roleAccountLinkControl.html',
  './templates/en/roleListView.html',
  './templates/en/roleToAccountMapping.html',
  './templates/en/roleToExtCell.html',
  './templates/en/roleToExtRole.html',
  './templates/en/roleToRelationMapping.html',
  './templates/en/ruleDetail.html',
  './templates/en/ruleInfo.html',
  './templates/en/ruleListView.html',
  './templates/en/schemaManagement.html',
  './templates/en/sentMessage.html',
  './templates/en/snapshot.html',
];

caches.open(CACHE_NAME).then(cache => {
  return cache.add('.')
})

self.addEventListener('install', event => {
  console.log('インストール');
  event.waitUntil(
    caches.open(CACHE_NAME).then( cache => {
      return cache.addAll(urlsToCache).then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response ? response : fetch(event.request);
    })
    // caches.open(CACHE_NAME).then(cache => {
    //   return cache.match(event.request).then(response => {
    //     return response || fetch(event.request).then(response => {
    //       cache.put(event.request, response.clone());
    //       return response;
    //     });
    //   });
    // })
  );
});