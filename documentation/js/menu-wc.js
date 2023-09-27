'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">bunlar-backend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-22c498765041f8b10fcd4e16fb57251aa8e30e8751629c70eaf4ce83333bd48a530a955d92e51cd3f3fbe680982bdb1ca5d307d4e3cf4cd9fb08623cc04edffd"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-22c498765041f8b10fcd4e16fb57251aa8e30e8751629c70eaf4ce83333bd48a530a955d92e51cd3f3fbe680982bdb1ca5d307d4e3cf4cd9fb08623cc04edffd"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-22c498765041f8b10fcd4e16fb57251aa8e30e8751629c70eaf4ce83333bd48a530a955d92e51cd3f3fbe680982bdb1ca5d307d4e3cf4cd9fb08623cc04edffd"' :
                                            'id="xs-controllers-links-module-AuthModule-22c498765041f8b10fcd4e16fb57251aa8e30e8751629c70eaf4ce83333bd48a530a955d92e51cd3f3fbe680982bdb1ca5d307d4e3cf4cd9fb08623cc04edffd"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-22c498765041f8b10fcd4e16fb57251aa8e30e8751629c70eaf4ce83333bd48a530a955d92e51cd3f3fbe680982bdb1ca5d307d4e3cf4cd9fb08623cc04edffd"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-22c498765041f8b10fcd4e16fb57251aa8e30e8751629c70eaf4ce83333bd48a530a955d92e51cd3f3fbe680982bdb1ca5d307d4e3cf4cd9fb08623cc04edffd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-22c498765041f8b10fcd4e16fb57251aa8e30e8751629c70eaf4ce83333bd48a530a955d92e51cd3f3fbe680982bdb1ca5d307d4e3cf4cd9fb08623cc04edffd"' :
                                        'id="xs-injectables-links-module-AuthModule-22c498765041f8b10fcd4e16fb57251aa8e30e8751629c70eaf4ce83333bd48a530a955d92e51cd3f3fbe680982bdb1ca5d307d4e3cf4cd9fb08623cc04edffd"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RegistrationConfirmedListener.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegistrationConfirmedListener</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserLoginListener.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserLoginListener</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserRegisteredListener.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserRegisteredListener</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CountriesModule.html" data-type="entity-link" >CountriesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CountriesModule-b668ffe3ae6579e23780116bb2db7c9e774b89e41384b4506d4fb0d9c0c877804643b4525813908e34795dd3a27786db83d3575085628c32941923dc31a09c87"' : 'data-bs-target="#xs-controllers-links-module-CountriesModule-b668ffe3ae6579e23780116bb2db7c9e774b89e41384b4506d4fb0d9c0c877804643b4525813908e34795dd3a27786db83d3575085628c32941923dc31a09c87"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CountriesModule-b668ffe3ae6579e23780116bb2db7c9e774b89e41384b4506d4fb0d9c0c877804643b4525813908e34795dd3a27786db83d3575085628c32941923dc31a09c87"' :
                                            'id="xs-controllers-links-module-CountriesModule-b668ffe3ae6579e23780116bb2db7c9e774b89e41384b4506d4fb0d9c0c877804643b4525813908e34795dd3a27786db83d3575085628c32941923dc31a09c87"' }>
                                            <li class="link">
                                                <a href="controllers/CountriesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CountriesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CountriesModule-b668ffe3ae6579e23780116bb2db7c9e774b89e41384b4506d4fb0d9c0c877804643b4525813908e34795dd3a27786db83d3575085628c32941923dc31a09c87"' : 'data-bs-target="#xs-injectables-links-module-CountriesModule-b668ffe3ae6579e23780116bb2db7c9e774b89e41384b4506d4fb0d9c0c877804643b4525813908e34795dd3a27786db83d3575085628c32941923dc31a09c87"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CountriesModule-b668ffe3ae6579e23780116bb2db7c9e774b89e41384b4506d4fb0d9c0c877804643b4525813908e34795dd3a27786db83d3575085628c32941923dc31a09c87"' :
                                        'id="xs-injectables-links-module-CountriesModule-b668ffe3ae6579e23780116bb2db7c9e774b89e41384b4506d4fb0d9c0c877804643b4525813908e34795dd3a27786db83d3575085628c32941923dc31a09c87"' }>
                                        <li class="link">
                                            <a href="injectables/CountriesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CountriesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CountryCreatedListener.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CountryCreatedListener</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CountryDeletedListener.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CountryDeletedListener</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CountryUpdatedListener.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CountryUpdatedListener</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LanguagesModule.html" data-type="entity-link" >LanguagesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-LanguagesModule-2902a4da778129ed0a13ea332368c57bdca5b1040871d17a813048a064b136aa04e3d69cfbf6b01c262cb3d5f55e8b4b3142eb84aab71563b7347790f7ebc279"' : 'data-bs-target="#xs-controllers-links-module-LanguagesModule-2902a4da778129ed0a13ea332368c57bdca5b1040871d17a813048a064b136aa04e3d69cfbf6b01c262cb3d5f55e8b4b3142eb84aab71563b7347790f7ebc279"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LanguagesModule-2902a4da778129ed0a13ea332368c57bdca5b1040871d17a813048a064b136aa04e3d69cfbf6b01c262cb3d5f55e8b4b3142eb84aab71563b7347790f7ebc279"' :
                                            'id="xs-controllers-links-module-LanguagesModule-2902a4da778129ed0a13ea332368c57bdca5b1040871d17a813048a064b136aa04e3d69cfbf6b01c262cb3d5f55e8b4b3142eb84aab71563b7347790f7ebc279"' }>
                                            <li class="link">
                                                <a href="controllers/LanguagesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LanguagesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-LanguagesModule-2902a4da778129ed0a13ea332368c57bdca5b1040871d17a813048a064b136aa04e3d69cfbf6b01c262cb3d5f55e8b4b3142eb84aab71563b7347790f7ebc279"' : 'data-bs-target="#xs-injectables-links-module-LanguagesModule-2902a4da778129ed0a13ea332368c57bdca5b1040871d17a813048a064b136aa04e3d69cfbf6b01c262cb3d5f55e8b4b3142eb84aab71563b7347790f7ebc279"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LanguagesModule-2902a4da778129ed0a13ea332368c57bdca5b1040871d17a813048a064b136aa04e3d69cfbf6b01c262cb3d5f55e8b4b3142eb84aab71563b7347790f7ebc279"' :
                                        'id="xs-injectables-links-module-LanguagesModule-2902a4da778129ed0a13ea332368c57bdca5b1040871d17a813048a064b136aa04e3d69cfbf6b01c262cb3d5f55e8b4b3142eb84aab71563b7347790f7ebc279"' }>
                                        <li class="link">
                                            <a href="injectables/LanguagesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LanguagesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CountriesController.html" data-type="entity-link" >CountriesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/LanguagesController.html" data-type="entity-link" >LanguagesController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ConfirmRegistrationDto.html" data-type="entity-link" >ConfirmRegistrationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Country.html" data-type="entity-link" >Country</a>
                            </li>
                            <li class="link">
                                <a href="classes/CountryCreatedEvent.html" data-type="entity-link" >CountryCreatedEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/CountryDeletedEvent.html" data-type="entity-link" >CountryDeletedEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/CountryUpdatedEvent.html" data-type="entity-link" >CountryUpdatedEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCountryDto.html" data-type="entity-link" >CreateCountryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateLanguageDto.html" data-type="entity-link" >CreateLanguageDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link" >HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/Language.html" data-type="entity-link" >Language</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginResponse.html" data-type="entity-link" >LoginResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginUserDto.html" data-type="entity-link" >LoginUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterUserDto.html" data-type="entity-link" >RegisterUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegistrationConfirmedEvent.html" data-type="entity-link" >RegistrationConfirmedEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCountryDto.html" data-type="entity-link" >UpdateCountryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateLanguageDto.html" data-type="entity-link" >UpdateLanguageDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserLoginEvent.html" data-type="entity-link" >UserLoginEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserRegisteredEvent.html" data-type="entity-link" >UserRegisteredEvent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CountriesService.html" data-type="entity-link" >CountriesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CountryCreatedListener.html" data-type="entity-link" >CountryCreatedListener</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CountryDeletedListener.html" data-type="entity-link" >CountryDeletedListener</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CountryUpdatedListener.html" data-type="entity-link" >CountryUpdatedListener</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ErrorsInterceptor.html" data-type="entity-link" >ErrorsInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HttpCacheInterceptor.html" data-type="entity-link" >HttpCacheInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LanguagesService.html" data-type="entity-link" >LanguagesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggerMiddleware.html" data-type="entity-link" >LoggerMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggingInterceptor.html" data-type="entity-link" >LoggingInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ParseIntPipe.html" data-type="entity-link" >ParseIntPipe</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RegistrationConfirmedListener.html" data-type="entity-link" >RegistrationConfirmedListener</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TimeoutInterceptor.html" data-type="entity-link" >TimeoutInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TransformInterceptor.html" data-type="entity-link" >TransformInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserLoginListener.html" data-type="entity-link" >UserLoginListener</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserRegisteredListener.html" data-type="entity-link" >UserRegisteredListener</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ValidationPipe.html" data-type="entity-link" >ValidationPipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/RolesGuard.html" data-type="entity-link" >RolesGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Response.html" data-type="entity-link" >Response</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});