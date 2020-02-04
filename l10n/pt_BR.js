define(function(require, exports, module) {
    return module.exports = {
        'template': {
            'default': 'Mapa mental',
            'tianpan': 'Mapa Sky',
            'structure': 'Organograma',
            'filetree': 'Organograma Ramificado',
            'right': 'Diagrama de estrutura lógica',
            'fish-bone': 'Espinha de peixe'
        },
        'theme': {
            'classic': 'Clássico',
            'classic-compact': 'Clássico compacto',
            'snow': 'Luz fria suave',
            'snow-compact': 'Luz fria compacta',
            'fish': 'Mapa espinha de peixe',
            'wire': 'Amarração de arame',
            'fresh-red': 'Vermelho fresco',
            'fresh-soil': 'Amarelo sujo',
            'fresh-green': 'Verde artístico',
            'fresh-blue': 'Azul do céu',
            'fresh-purple': 'Roxo romântico',
            'fresh-pink': 'Rosa mental',
            'fresh-red-compat': 'Vermelho compacto',
            'fresh-soil-compat': 'Amarelo compacto',
            'fresh-green-compat': 'Verde compacto',
            'fresh-blue-compat': 'Azul compacto',
            'fresh-purple-compat': 'Roxo compacto',
            'fresh-pink-compat': 'Rosa compacto',
            'tianpan': 'Acordo clássico',
            'tianpan-compact': 'Dia compacto'
        },
        'maintopic': 'Tema central',
        'topic': 'sub-tópico',
        'panels': {
            'history': 'histórico',
            'template': 'modelo',
            'theme': 'tema',
            'layout': 'layout',
            'style': 'estilo',
            'font': 'fonte',
            'color': 'cor',
            'background': 'fundo',
            'insert': 'inserir',
            'arrange': 'ajustar',
            'nodeop': 'atual',
            'priority': 'prioridade',
            'progress': 'progresso',
            'resource': 'recurso',
            'note': 'nota',
            'attachment': 'anexo',
            'word': 'texto'
        },
        'ui': {
            'command': {
                'appendsiblingnode': 'Inserir nó irmão',
                'appendparentnode': 'Inserir nó pai',
                'appendchildnode': 'Inserir nó filho',
                'removenode': 'Deletar',
                'editnode': 'Editar',
                'arrangeup': 'Subir',
                'arrangedown': 'Descer',
                'resetlayout': 'Resetar layout',
                'expandtoleaf': 'Expandir todos os nós',
                'expandtolevel1': 'Expandir para nível 1',
                'expandtolevel2': 'Expandir para nível 2',
                'expandtolevel3': 'Expandir para nível 3',
                'expandtolevel4': 'Expandir para nível 4',
                'expandtolevel5': 'Expandir para nível 5',
                'expandtolevel6': 'Expandir para nível 6',
                'fullscreen': 'Tela cheia',
                'outline': 'contorno'
            },
            'search': 'Buscar',
            'expandtoleaf': 'Expandir',
            'back': 'voltar',
            'undo': 'Desfazer (Ctrl + Z)',
            'redo': 'Refazer (Ctrl + Y)',
            'tabs': {
                'idea': 'Ideia',
                'appearence': 'Aparência',
                'view': 'Visualizar'
            },
            'bold': 'Negrito',
            'italic': 'Itálico',
            'forecolor': 'Cor da fonte',
            'fontfamily': 'Fonte',
            'fontsize': 'Tamanho',
            'layoutstyle': 'Tema',
            'node': 'Operação do nós',
            'hand': 'Permitir arrastar',
            'camera': 'Localizar o nó raíz',
            'zoom-in': 'Aproximar zoom (Ctrl+)',
            'zoom-out': 'Afastar zoom (Ctrl-)',
            'markers': 'tag',
            'help': 'Ajuda',
            'preference': 'Preferências',
            'expandnode': 'Expandir to folha',
            'collapsenode': 'receber nó de nível 1',
            'template': 'modelo',
            'theme': 'tela',
            'clearstyle': 'Limpar estilo',
            'copystyle': 'Copiar estilo',
            'pastestyle': 'Colar estilo',
            'appendsiblingnode': 'mesmo tema',
            'appendchildnode': 'tema subordinado',
            'arrangeup': 'pre-tune',
            'arrangedown': 'post-tune',
            'editnode': 'Editar',
            'removenode': 'remover',
            'priority': 'Prioridade',
            'progress': {
                'p1': 'não iniciado',
                'p2': '1/8 concluído',
                'p3': '1/4 concluído',
                'p4': '3/8 concluído',
                'p5': 'Metade concluído',
                'p6': '5/8 concluído',
                'p7': '3/4 concluído',
                'p8': '7/8 concluído',
                'p9': 'Concluído',
                'p0': 'Limpar progresso'
            },
            'resource': {
                'add': 'Adicionar'
            },
            'link': 'Link',
            'image': 'Imagem',
            'note': 'Nota',
            'insertlink': 'Inserir link',
            'insertimage': 'Inserir imagem',
            'insertnote': 'Inserir nota',
            'removelink': 'Remover links existentes',
            'removeimage': 'Remover imagem existente',
            'removenote': 'Removes notas existentes',
            'resetlayout': 'Organizar',
            'navigator': 'Navegador',
            'selectall': 'Selecionar tudo',
            'selectrevert': 'Reverter seleção',
            'selectsiblings': 'Selecionar irmãos',
            'selectlevel': 'Selecionar nível',
            'selectpath': 'Selecionar caminho',
            'selecttree': 'Selecionar sub-árvore',
            'noteeditor': {
                'title': 'Nota',
                'hint': 'Suporta GFM grammar',
                'placeholder': 'Por favor selecione um nó para editar'
            },
            'dialog': {
                'image': {
                    'title': 'Imagem',
                    'imagesearch': 'Buscar imagem',
                    'keyword': 'Palavra-chave：',
                    'placeholder': 'Por favor digite a palavra-chave para buscar',
                    'baidu': 'Buscar',
                    'linkimage': 'Imagem Linkada',
                    'linkurl': 'URL：',
                    'placeholder2': 'Requer： iniciar com http(s)://',
                    'imagehint': 'Lembrete：',
                    'placeholder3': 'Opcional： O texto quando manter o mouse sobre a imagem',
                    'preview': 'Pré-visualização de imagem：',
                    'uploadimage': 'Enviar Imagem',
                    'selectfile': 'Selecionar arquivo...',
                    'ok': 'OK',
                    'cancel': 'Cancelar',
                    'formatinfo': 'Extensão do arquivo precisa ser jpg, gif ou png'
                },
                'hyperlink': {
                    'title': 'Link',
                    'linkurl': 'URL do Link：',
                    'linkhint': 'Lembrete：',
                    'placeholder': 'Requer： iniciar com http(s):// ou ftp://',
                    'placeholder2': 'Opcional: O texto quando manter o mouse sobre o link',
                    'ok': 'OK',
                    'cancel': 'Cancelar'

                },
                'exportnode': {
                    'title': 'Exportar Nó',
                    'ok': 'OK',
                    'cancel': 'Cancelar'
                }
            }
        },
        'runtime': {
            'minder': {
                'maintopic': 'Tópico principal'
            },
            'node': {
                'arrangeup': 'Enviar para cima',
                'appendchildnode': 'Acrescentar nó filho',
                'appendsiblingnode': 'Acrescentar nó irmão',
                'arrangedown': 'Enviar para baixo',
                'removenode': 'Deletar',
                'appendparentnode': 'Acrescentar nó pai',
                'selectall': 'Selecionar tudo',
                'topic': 'Topic',
                'importnode': 'Importar Nó',
                'exportnode': 'Exportar Nó'
            },
            'input': {
                'edit': 'Editar'
            },
            'priority': {
                'main': 'Prioridade',
                'remove': 'Deletar',
                'esc': 'Esc'
            },
            'progress': {
                'main': 'Progresso',
                'remove': 'Deletar',
                'esc': 'Esc'
            },
            'history': {
                'undo': 'Desfazer',
                'redo': 'Refazer'
            }
        }
    };
});
