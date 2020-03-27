define(function(require, exports, module) {
    return module.exports = {
        'template': {
            'default': 'Mindmap',
            'tianpan': 'Cadran',
            'structure': 'Organigramme',
            'filetree': 'Organigramme hiérarchique',
            'right': 'Organigramme logique',
            'fish-bone': 'Squelette'
        },
        'theme': {
            'classic': 'Classique',
            'classic-compact': 'Classique compact',
            'snow': 'Sombre',
            'snow-compact': 'Sombre compact',
            'fish': 'Squelette',
            'wire': 'Fil de fer',
            'fresh-red': 'Rouge',
            'fresh-soil': 'Marron',
            'fresh-green': 'Vert',
            'fresh-blue': 'Bleu',
            'fresh-purple': 'Violet',
            'fresh-pink': 'Rose',
            'fresh-red-compat': 'Rouge compact',
            'fresh-soil-compat': 'Marron compact',
            'fresh-green-compat': 'Vert compact',
            'fresh-blue-compat': 'Bleu compact',
            'fresh-purple-compat': 'Violet compact',
            'fresh-pink-compat': 'Rose compact',
            'tianpan': 'Cadran',
            'tianpan-compact': 'Cadran compact'
        },
        'maintopic': 'Sujet principal',
        'topic': 'branche',
        'panels': {
            'history': 'historique',
            'template': 'modèle',
            'theme': 'thème',
            'layout': 'disposition',
            'style': 'style',
            'font': 'texte',
            'color': 'couleur',
            'background': 'fond',
            'insert': 'insérer',
            'arrange': 'ajuster',
            'nodeop': 'actuel',
            'priority': 'priorité',
            'progress': 'progression',
            'resource': 'ressource',
            'note': 'note',
            'attachment': 'fichier joint',
            'word': 'texte'
        },
        'ui': {
            'command': {
                'appendsiblingnode': 'Insérer noeud voisin',
                'appendparentnode': 'Insérer noeud parent',
                'appendchildnode': 'Insérer noeud enfant',
                'removenode': 'Supprimer',
                'editnode': 'Editer',
                'arrangeup': 'Monter',
                'arrangedown': 'Descendre',
                'resetlayout': 'Réorganise',
                'expandtoleaf': 'Déplier tous les noeuds',
                'expandtolevel1': 'Déplier au niveau 1',
                'expandtolevel2': 'Déplier au niveau 2',
                'expandtolevel3': 'Déplier au niveau 3',
                'expandtolevel4': 'Déplier au niveau 4',
                'expandtolevel5': 'Déplier au niveau 5',
                'expandtolevel6': 'Déplier au niveau 6',
                'fullscreen': 'Plein écran',
                'outline': 'contour'
            },
            'search': 'Recherche',
            'expandtoleaf': 'Déplier',
            'back': 'retour',
            'undo': 'Annuler (Ctrl-Z)',
            'redo': 'Rétablir (Ctrl-Y)',
            'tabs': {
                'idea': 'Edition',
                'appearence': 'Style',
                'view': 'Affichage'
            },
            'bold': 'Gras',
            'italic': 'Italic',
            'forecolor': 'Couleur',
            'fontfamily': 'Police',
            'fontsize': 'Taille',
            'layoutstyle': 'Thème',
            'node': 'Node operation',
            'hand': 'Mode déplacement',
            'camera': 'Centrer sur le noeud principal',
            'zoom-in': 'Agrandir (Ctrl+)',
            'zoom-out': 'Dézoomer (Ctrl-)',
            'markers': 'tag',
            'help': 'Aide',
            'preference': 'Préférences',
            'expandnode': 'Déplier le noeud',
            'collapsenode': 'Fermer le noeud',
            'template': 'modèle',
            'theme': 'style',
            'clearstyle': 'Effacer le style',
            'copystyle': 'Copier le style',
            'pastestyle': 'Coller le style',
            'appendsiblingnode': 'Même thème',
            'appendchildnode': 'thème enfant',
            'arrangeup': 'Monter',
            'arrangedown': 'Descendre',
            'editnode': 'Editer',
            'removenode': 'Supprimer',
            'no priority' : 'Pas de priorité',
	    'priority': 'Priorité',
            'progress': {
                'p1': 'Non démarré',
                'p2': 'Fait à 1/8',
                'p3': 'Fait au 1/4',
                'p4': 'Fait à 3/8',
                'p5': 'Fait à moité',
                'p6': 'Fait à 5/8',
                'p7': 'Fait aux 3/4',
                'p8': 'Fait à 7/8',
                'p9': 'Terminé',
                'p0': 'Masquer la progression'
            },
            'resource': {
                'add': 'Ajouter'
            },
            'link': 'Lien',
            'image': 'Image',
            'note': 'Note',
            'insertlink': 'Inserer un lien',
            'insertimage': 'Inserer une image',
            'insertnote': 'Inserer une note',
            'removelink': 'Supprimer un lien existant',
            'removeimage': 'Supprimer une image existante',
            'removenote': 'Supprimer une note existante',
            'resetlayout': 'Réorganise',
            'navigator': 'Navigateur',
            'selectall': 'Selectionner tout',
            'selectrevert': 'Inverser la selection',
            'selectsiblings': 'Sélectionner les voisins',
            'selectlevel': 'Sélectionner le niveau',
            'selectpath': 'Sélectionner le chemin',
            'selecttree': 'Sélectionner la sous-arborescence',
            'noteeditor': {
                'title': 'Note',
                'hint': 'Accepte la syntaxe GFM (GitHub)',
                'placeholder': 'Merci de sélectionner une note'
            },
            'dialog': {
                'image': {
                    'title': 'Image',
                    'imagesearch': 'Recherche d\'image',
                    'keyword': 'Mot clé：',
                    'placeholder': 'Mot(s) clé(s) de recherche',
                    'baidu': 'Recherche',
                    'linkimage': 'Lien vers l\'image',
                    'linkurl': 'Adresse：',
                    'placeholder2': 'Requis：Commence par http(s)://',
                    'imagehint': 'Astuce：',
                    'placeholder3': 'Optionnel：Texte au survol de l\'image',
                    'preview': 'Aperçu de l\'image：',
                    'uploadimage': 'Charger une image',
                    'selectfile': 'Ouvrir un fichier...',
                    'ok': 'OK',
                    'cancel': 'Annuler',
                    'formatinfo': 'Le fichier doit être jpg, gif ou png'
                },
                'hyperlink': {
                    'title': 'Lien',
                    'linkurl': 'Adresse：',
                    'linkhint': 'Astuce：',
                    'placeholder': 'Requis：Commence par http(s):// ou ftp://',
                    'placeholder2': 'Optionnel: apparait au survol du lien',
                    'ok': 'OK',
                    'cancel': 'Annuler'

                },
                'exportnode': {
                    'title': 'Exporter le Noeud',
                    'ok': 'OK',
                    'cancel': 'Annuler'
                },
		'search': {
			'result': 'Résultat',
			'on': 'sur'
		}
            }
        },
        'runtime': {
            'minder': {
                'maintopic': 'Sujet Principal'
            },
            'node': {
                'arrangeup': 'Monter',
                'appendchildnode': 'Enfant',
                'appendsiblingnode': 'Voisin',
                'arrangedown': 'Desc.',
                'removenode': 'Suppr.',
                'appendparentnode': 'Parent',
                'selectall': 'Tout sélectionner',
                'topic': 'Sujet',
                'importnode': 'Importer un noeud',
                'exportnode': 'Exporter un noeud'
            },
            'input': {
                'edit': 'Edition'
            },
            'priority': {
                'main': 'Priorité',
                'remove': 'Supprimer',
                'esc': 'Retour'
            },
            'progress': {
                'main': 'Progression',
                'remove': 'Supprimer',
                'esc': 'Retour'
            },
            'history': {
                'undo': 'Annuler',
                'redo': 'Rétablir'
            }
        }
    };
});
