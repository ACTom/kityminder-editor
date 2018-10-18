angular.module('kityminderEditor')
    .service('lang.zh-pny', function() {
        return {
            'template': {
                'default': 'Sīwéi dǎo tú',
                'tianpan': 'Tiān pán tú',
                'structure': 'Zǔzhī jiégòu tú',
                'filetree': 'Mùlù zǔzhī tú',
                'right': 'Luójí jiégòu tú',
                'fish-bone': 'Yú gǔtou tú'
            },
            'theme': {
                'classic': 'Nǎo tú jīngdiǎn',
                'classic-compact': 'Jǐncòu jīngdiǎn',
                'snow': 'Wēnróu lěngguāng',
                'snow-compact': 'Jǐncòu lěngguāng',
                'fish': 'Yú gǔ tú',
                'wire': 'Xiàn kuāng',
                'fresh-red': 'Qīngxīn hóng',
                'fresh-soil': 'Nítǔ huáng',
                'fresh-green': 'Wényì lǜ',
                'fresh-blue': 'Tiānkōng lán',
                'fresh-purple': 'Làngmàn zǐ',
                'fresh-pink': 'Nǎocán fěn',
                'fresh-red-compat': 'Jǐncòu hóng',
                'fresh-soil-compat': 'Jǐncòu huáng',
                'fresh-green-compat': 'Jǐncòu lǜ',
                'fresh-blue-compat': 'Jǐncòu lán',
                'fresh-purple-compat': 'Jǐncòu zǐ',
                'fresh-pink-compat': 'Jǐncòu fěn',
                'tianpan':'Jīngdiǎn tiān pán',
                'tianpan-compact': 'Jǐncòu tiān pán'
            },
            'maintopic': 'Zhōngxīn zhǔtí',
            'topic': 'Fēnzhī zhǔtí',
            'panels': {
                'history': 'Lìshǐ',
                'template': 'Múbǎn',
                'theme': 'Pífū',
                'layout': 'Bùjú',
                'style': 'Yàngshì',
                'font': 'Wénzì',
                'color': 'Yánsè',
                'background': 'Bèijǐng',
                'insert': 'Chārù',
                'arrange': 'Tiáozhěng',
                'nodeop': 'Dāngqián',
                'priority': 'Yōuxiān jí',
                'progress': 'Jìndù',
                'resource': 'Zīyuán',
                'note': 'Bèizhù',
                'attachment': 'Fùjiàn',
                'word': 'Wénzì'
            },
            'error_message': {
                'title': 'Āiyā, nǎo tú chūcuòle',

                'err_load': 'Jiāzài nǎo tú shībài',
                'err_save': 'Bǎocún nǎo tú shībài',
                'err_network': 'Wǎngluò cuòwù',
                'err_doc_resolve': 'Wéndàng jiěxī shībài',
                'err_unknown': 'Fāshēngle qíguài de cuòwù',
                'err_localfile_read': 'Wénjiàn dòu qǔ cuòwù',
                'err_download': 'Wénjiàn xià zǎi shībài',
                'err_remove_share': 'Qǔxiāo fēnxiǎng shībài',
                'err_create_share': 'Fēnxiǎng shībài',
                'err_mkdir': 'Mùlù chuàngjiàn shībài',
                'err_ls': 'Dòu qǔ mùlù shībài',
                'err_share_data': 'Jiāzài fēnxiǎng nèiróng chūcuò',
                'err_share_sync_fail': 'Fēnxiǎng nèiróng tóngbù shībài',
                'err_move_file': 'Wénjiàn yídòng shībài',
                'err_rename': 'Zhòng mìngmíng shībài',

                'unknownreason': 'Kěnéng shì wài xīng rén cuàngǎile dàimǎ...',
                'pcs_code': {
                    3: "Bù zhīchí cǐ jiēkǒu",
                    4: "Méiyǒu quánxiàn zhíxíng cǐ cāozuò",
                    5: "IP wèi shòuquán",
                    110: "Yònghù huìhuà yǐ guòqí, qǐng chóngxīn dēnglù",
                    31001: "Shùjùkù cháxún cuòwù",
                    31002: "Shùjùkù liánjiē cuòwù",
                    31003: "Shùjùkù fǎnhuí kōng jiéguǒ",
                    31021: "Wǎngluò cuòwù",
                    31022: "Zhànshí wúfǎ liánjiē fúwùqì",
                    31023: "Shūrù cānshù cuòwù",
                    31024: "App id wèi kōng",
                    31025: "Hòu duān cúnchú cuòwù",
                    31041: "Yònghù de cookie bùshì héfǎ de bǎidù cookie",
                    31042: "Yònghù wèi dēnglù",
                    31043: "Yònghù wèi jīhuó",
                    31044: "Yònghù wèi shòuquán",
                    31045: "Yònghù bù cúnzài",
                    31046: "Yònghù yǐjīng cúnzài",
                    31061: "Wénjiàn yǐjīng cúnzài",
                    31062: "Wénjiàn míng fēifǎ",
                    31063: "Wénjiàn fù mùlù bù cúnzài",
                    31064: "Wú quán fǎngwèn cǐ wénjiàn",
                    31065: "Mùlù yǐ mǎn",
                    31066: "Wénjiàn bù cúnzài",
                    31067: "Wénjiàn chǔlǐ chūcuò",
                    31068: "Wénjiàn chuàngjiàn shībài",
                    31069: "Wénjiàn kǎobèi shībài",
                    31070: "Wénjiàn shānchú shībài",
                    31071: "Bùnéng dòu qǔ wénjiàn yuán xìnxī",
                    31072: "Wénjiàn yídòng shībài",
                    31073: "Wénjiàn zhòng mìngmíng shībài",
                    31079: "Wèi zhǎodào wénjiàn MD5, qǐng shǐyòng shàngchuán API shàngchuán zhěnggè wénjiàn.",
                    31081: "superfile chuàngjiàn shībài",
                    31082: "superfile kuài lièbiǎo wèi kōng",
                    31083: "superfile gēngxīn shībài",
                    31101: "Tag xìtǒng nèibù cuòwù",
                    31102: "Tag cānshù cuòwù",
                    31103: "Tag xìtǒng cuòwù",
                    31110: "Wèi shòuquán shèzhì cǐ mùlù pèi'é",
                    31111: "Pèi'é guǎnlǐ zhǐ zhīchí liǎng jí mùlù",
                    31112: "Chāochū pèi'é",
                    31113: "Pèi'é bùnéng chāochū mùlù zǔxiān de pèi'é",
                    31114: "Pèi'é bùnéng bǐ zǐ mùlù pèi'é xiǎo",
                    31141: "Qǐngqiú suō lüètú fúwù shībài",
                    31201: "Qiānmíng cuòwù",
                    31202: "Wénjiàn bù cúnzài",
                    31203: "Shèzhì acl shībài",
                    31204: "Qǐngqiú acl yànzhèng shībài",
                    31205: "Huòqǔ acl shībài",
                    31206: "Acl bù cúnzài",
                    31207: "Bucket yǐ cúnzài",
                    31208: "Yònghù qǐngqiú cuòwù",
                    31209: "Fúwùqì cuòwù",
                    31210: "Fúwùqì bù zhīchí",
                    31211: "Jìnzhǐ fǎngwèn",
                    31212: "Fúwù bùkě yòng",
                    31213: "Chóng shì chūcuò",
                    31214: "Shàngchuán wénjiàn data shībài",
                    31215: "Shàngchuán wénjiàn meta shībài",
                    31216: "Xiàzài wénjiàn data shībài",
                    31217: "Xiàzài wénjiàn meta shībài",
                    31218: "Róngliàng chāochū xiàn'é",
                    31219: "Qǐngqiú shù chāochū xiàn'é",
                    31220: "Liúliàng chāochū xiàn'é",
                    31298: "Fúwùqì fǎnhuí zhí KEY fēifǎ",
                    31299: "Fúwùqì fǎnhuí zhí KEY bù cúnzài"
                }
            },
            'ui': {
                'shared_file_title': '[Fēnxiǎng de] {0} (zhǐ dú)',
                'load_share_for_edit': 'Zhèngzài jiāzài fēnxiǎng de wénjiàn...',
                'share_sync_success': 'Fēnxiǎng nèiróng yǐ tóngbù',
                'recycle_clear_confirm': 'Quèrèn qīngkōng huíshōu zhàn me? Qīngkōng hòu de wénjiàn wúfǎ huīfù.',

                'fullscreen_exit_hint': 'Àn Esc huò F11 tuìchū quánpíng',

                'error_detail': 'Xiángxì xìnxī',
                'copy_and_feedback': 'Fùzhì bìng fǎnkuì',
                'move_file_confirm': 'Quèdìng bǎ"{0}" yídòng dào"{1}" ma?',
                'rename': 'Zhòng mìngmíng',
                'rename_success': '{0} Zhòng mìngmíng chénggōng',
                'move_success': '{0} Yídòng chénggōng dào {1}',

                'command': {
                    'exportPNG': 'Dǎochū wèi PNG túpiàn',
                    'exportSVG': 'Dǎochū wèi SVG túpiàn',
                    'appendsiblingnode': 'Chārù tóng jí zhǔtí',
                    'appendparentnode': 'Chārù shàngjí zhǔtí',
                    'appendchildnode': 'Chārù xiàjí zhǔtí',
                    'removenode': 'Shānchú',
                    'editnode': 'Biānjí',
                    'arrangeup': 'Shàng yí',
                    'arrangedown': 'Xià yí',
                    'resetlayout': 'Zhěnglǐ bùjú',
                    'expandtoleaf': 'Zhǎnkāi quánbù jiédiǎn',
                    'expandtolevel1': 'Zhǎnkāi dào yī jí jiédiǎn',
                    'expandtolevel2': 'Zhǎnkāi dào èr jí jiédiǎn',
                    'expandtolevel3': 'Zhǎnkāi dào sān jí jiédiǎn',
                    'expandtolevel4': 'Zhǎnkāi dào sì jí jiédiǎn',
                    'expandtolevel5': 'Zhǎnkāi dào wǔ jí jiédiǎn',
                    'expandtolevel6': 'Zhǎnkāi dào liù jí jiédiǎn',
                    'fullscreen': 'Quánpíng',
                    'outline': 'Dàgāng'
                },

                'search':'Sōusuǒ',

                'export': 'Dǎochū',

                'expandtoleaf': 'Zhǎnkāi',

                'back': 'Fǎnhuí',

                'undo': 'Chèxiāo (Ctrl + Z)',
                'redo': 'Chóng zuò (Ctrl + Y)',

                'tabs': {
                    'file': 'Wénjiàn',
                    'idea': 'Sīlù',
                    'appearence': 'Wàiguān',
                    'view': 'Shìtú'
                },

                'quickvisit': {
                    'new': 'Xīnjiàn (Ctrl + Alt + N)',
                    'save': 'Bǎocún (Ctrl + S)',
                    'share': 'Fēnxiǎng (Ctrl + Alt + S)',
                    'feedback': 'Fǎnkuì wèntí (F1)',
                    'editshare': 'Biānjí'
                },

                'menu': {

                    'mainmenutext': 'Bǎidù nǎo tú', // zhǔ càidān ànniǔ wénběn

                    'newtab': 'Xīnjiàn',
                    'opentab': 'Dǎkāi',
                    'savetab': 'Bǎocún',
                    'sharetab': 'Fēnxiǎng',
                    'preferencetab': 'Shèzhì',
                    'helptab': 'Bāngzhù',
                    'feedbacktab': 'Fǎnkuì',
                    'recenttab': 'Zuìjìn shǐyòng',
                    'netdisktab': 'Bǎidù yún cúnchú',
                    'localtab': 'Běndì wénjiàn',
                    'drafttab': 'Cǎogǎo xiāng',
                    'downloadtab': 'Dǎochū dào běndì',
                    'createsharetab': 'Dāngqián nǎo tú',
                    'managesharetab': 'Yǐ fēnxiǎng',

                    'newheader': 'Xīnjiàn nǎo tú',
                    'openheader': 'Dǎkāi',
                    'saveheader': 'Bǎocún dào',
                    'draftheader': 'Cǎogǎo xiāng',
                    'shareheader': 'Fēnxiǎng wǒ de nǎo tú',
                    'downloadheader': 'Dǎochū dào zhǐdìng géshì',
                    'preferenceheader': 'Piānhào shèzhì',
                    'helpheader': 'Bāngzhù',
                    'feedbackheader': 'Fǎnkuì'
                },

                'mydocument': 'Wǒ de wéndàng',
                'emptydir': 'Mùlù wèi kōng!',
                'pickfile': 'Xuǎnzé wénjiàn...',
                'acceptfile': 'Zhīchí de géshì:{0}',
                'dropfile': 'Huò jiāng wénjiàn tuō zhìcǐ chù',
                'unsupportedfile': 'Bù zhīchí de wénjiàn géshì',
                'untitleddoc': 'Wèi mìngmíng wéndàng',
                'overrideconfirm': '{0} Yǐ cúnzài, quèrèn fùgài ma?',
                'checklogin': 'Jiǎnchá dēnglù zhuàngtài zhōng...',
                'loggingin': 'Zhèngzài dēnglù...',
                'recent': 'Zuìjìn dǎkāi',
                'clearrecent': 'Qīngkōng',
                'clearrecentconfirm': 'Quèrèn qīngkōng zuìjìn wéndàng lièbiǎo?',
                'cleardraft': 'Qīngkōng',
                'cleardraftconfirm': 'Quèrèn qīngkōng cǎogǎo xiāng?',

                'none_share': 'Bù fēnxiǎng',
                'public_share': 'Gōngkāi fēnxiǎng',
                'password_share': 'Sīmì fēnxiǎng',
                'email_share': 'Yóujiàn yāoqǐng',
                'url_share': 'Nǎo tú URL dìzhǐ:',
                'sns_share': 'Shèjiāo wǎngluò fēnxiǎng:',
                'sns_share_text': '“{0}” - Wǒ yòng bǎidù nǎo tú zhìzuò de sīwéi dǎo tú, kuài kàn kàn ba!(Dìzhǐ:{1})',
                'none_share_description': 'Bù fēnxiǎng dāngqián nǎo tú',
                'public_share_description': 'Chuàngjiàn rènhé rén kějiàn de fēnxiǎng',
                'share_button_text': 'Chuàngjiàn',
                'password_share_description': 'Chuàngjiàn xūyào mìmǎ cái kějiàn de fēnxiǎng',
                'email_share_description': 'Chuàngjiàn zhǐdìng rén kějiàn de fēnxiǎng, nín hái kěyǐ yǔnxǔ tāmen biānjí',
                'ondev': 'Jìng qǐng qídài!',
                'create_share_failed': 'Fēnxiǎng shībài:{0}',
                'remove_share_failed': 'Shānchú shībài:{1}',
                'copy': 'Fùzhì',
                'copied': 'Yǐ fùzhì',
                'shared_tip': 'Dāngqián nǎo tú bèi {0} fēnxiǎng, nǐ kěyǐ xiūgǎi zhīhòu bǎocún dào zìjǐ de wǎng pán shàng huò zàicì fēnxiǎng',
                'current_share': 'Dāngqián nǎo tú',
                'manage_share': 'Wǒ de fēnxiǎng',
                'share_remove_action': 'Bù fēnxiǎng gāi nǎo tú',
                'share_view_action': 'Dǎkāi fēnxiǎng dìzhǐ',
                'share_edit_action': 'Biānjí fēnxiǎng de wénjiàn',

                'login': 'Dēnglù',
                'logout': 'Zhùxiāo',
                'switchuser': 'Qiēhuàn zhànghù',
                'userinfo': 'Gèrén xìnxī',
                'gotonetdisk': 'Wǒ de wǎng pán',
                'requirelogin': 'Qǐng <a class="login-button">dēnglù </a> hòu shǐyòng',
                'saveas': 'Bǎocún wèi',
                'filename': 'Wénjiàn míng',
                'fileformat': 'Bǎocún géshì',
                'save': 'Bǎocún',
                'mkdir': 'Xīnjiàn mùlù',
                'recycle': 'Huíshōu zhàn',
                'newdir': 'Wèi mìngmíng mùlù',

                'bold': 'Jiā cū',
                'italic': 'Xiétǐ',
                'forecolor': 'Zìtǐ yánsè',
                'fontfamily': 'Zìtǐ',
                'fontsize': 'Zìhao',
                'layoutstyle': 'Zhǔtí',
                'node': 'Jiédiǎn cāozuò',
                'saveto': 'Lìngcún wèi',
                'hand': 'Yǔnxǔ tuō zhuāi',
                'camera': 'Dìngwèi gēn jiédiǎn',
                'zoom-in': 'Fàngdà (Ctrl+)',
                'zoom-out': 'Suōxiǎo (Ctrl-)',
                'markers': 'Biāoqiān',
                'resource': 'Zīyuán',
                'help': 'Bāngzhù',
                'preference': 'Piānhào shèzhì',
                'expandnode': 'Zhǎnkāi dào yèzi',
                'collapsenode': 'Shōu qǐ dào yī jí jiédiǎn',
                'template': 'Múbǎn',
                'theme': 'Pífū',
                'clearstyle': 'Qīngchú yàngshì',
                'copystyle': 'Fùzhì yàngshì',
                'pastestyle': 'Zhāntiē yàngshì',
                'appendsiblingnode': 'Tóng jí zhǔtí',
                'appendchildnode': 'Xiàjí zhǔtí',
                'arrangeup': 'Qián diào',
                'arrangedown': 'Hòu diào',
                'editnode': 'Biānjí',
                'removenode': 'Yí chú',
                'priority': 'Yōuxiān jí',
                'progress': {
                    'p1': 'Wèi kāishǐ',
                    'p2': 'Wánchéng 1/8',
                    'p3': 'Wánchéng 1/4',
                    'p4': 'Wánchéng 3/8',
                    'p5': 'Wánchéng yībàn',
                    'p6': 'Wánchéng 5/8',
                    'p7': 'Wánchéng 3/4',
                    'p8': 'Wánchéng 7/8',
                    'p9': 'Yǐ wánchéng',
                    'p0': 'Qīngchú jìndù'
                },
                'link': 'Liànjiē',
                'image': 'Túpiàn',
                'note': 'Bèizhù',
                'insertlink': 'Chārù liànjiē',
                'insertimage': 'Chārù túpiàn',
                'insertnote': 'Chārù bèizhù',
                'removelink': 'Yí chú yǐ yǒu liànjiē',
                'removeimage': 'Yí chú yǐ yǒu túpiàn',
                'removenote': 'Yí chú yǐ yǒu bèizhù',
                'resetlayout': 'Zhěnglǐ',

                'justnow': 'Gānggāng',
                'minutesago': '{0} Fēnzhōng qián',
                'hoursago': '{0} Xiǎoshí qián',
                'yesterday': 'Zuótiān',
                'daysago': '{0} Tiān qián',
                'longago': 'Hěnjiǔ zhīqián',

                'redirect': 'Nín zhèngzài dǎkāi liánjiē {0}, bǎidù nǎo tú bùnéng bǎozhèng liánjiē de ānquán xìng, shìfǒu yào jìxù?',
                'navigator': 'Dǎoháng qì',

                'unsavedcontent': 'Dāngqiáng wénjiàn hái méiyǒu bǎocún dào wǎng pán:\N\n{0}\n\n suīrán wèi bǎocún de shùjù huì huǎncún zài cǎogǎo xiāng, dànshì qīngchú liúlǎn qì huǎncún huì dǎozhì cǎogǎo xiāng qīngchú.',

                'shortcuts': 'Kuàijié jiàn',
                'contact': 'Liánxì yǔ fǎnkuì',
                'email': 'Yóujiàn zǔ',
                'qq_group': 'QQ qún',
                'github_issue': 'Github',
                'baidu_tieba': 'Tiēba',

                'clipboardunsupported': 'Nín de liúlǎn qì bù zhīchí jiǎntiē bǎn, qǐng shǐyòng kuàijié jiàn fùzhì',

                'load_success': '{0} Jiāzài chénggōng',
                'save_success': '{0} Yǐ bǎocún yú {1}',
                'autosave_success': '{0} Yǐ zìdòng bǎocún yú {1}',

                'selectall': 'Quán xuǎn',
                'selectrevert': 'Fǎnxuǎn',
                'selectsiblings': 'Xuǎnzé xiōngdì jiédiǎn',
                'selectlevel': 'Xuǎnzé tóng jí jiédiǎn',
                'selectpath': 'Xuǎnzé lùjìng',
                'selecttree': 'Xuǎnzé zǐ shù'
            },
            'popupcolor': {
                'clearColor': 'Qīngkōng yánsè',
                'standardColor': 'Biāozhǔn yánsè',
                'themeColor': 'Zhǔtí yánsè'
            },
            'dialogs': {
                'markers': {
                    'static': {
                        'lang_input_text': 'Wénběn nèiróng:',
                        'lang_input_url': 'Liànjiē dìzhǐ:',
                        'lang_input_title': 'Biāotí:',
                        'lang_input_target': 'Shìfǒu zài xīn chuāngkǒu:'
                    },
                    'priority': 'Yōuxiān jí',
                    'none': 'Wú',
                    'progress': {
                        'title': 'Jìndù',
                        'notdone': 'Wèi wánchéng',
                        'done1': 'Wánchéng 1/8',
                        'done2': 'Wánchéng 1/4',
                        'done3': 'Wánchéng 3/8',
                        'done4': 'Wánchéng 1/2',
                        'done5': 'Wánchéng 5/8',
                        'done6': 'Wánchéng 3/4',
                        'done7': 'Wánchéng 7/8',
                        'done': 'Yǐ wánchéng'
                    }
                },
                'help': {

                },
                'hyperlink': {},
                'image': {},
                'resource': {}
            },
            'hyperlink': {
                'hyperlink': 'Liànjiē...',
                'unhyperlink': 'Yí chú liànjiē'
            },
            'image': {
                'image': 'Túpiàn...',
                'removeimage': 'Yí chú túpiàn'
            },
            'marker': {
                'marker': 'Jìndù/yōuxiān jí...'
            },
            'resource': {
                'resource': 'Zīyuán...'
            }
        };
    });
