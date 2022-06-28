# FLEXBOX

## flex container

**display: flex** - torna a tag de um elemento para *flex container*, tornando seus filhos diretos, *flex items*. os *flex items* também podem tornar-se *flex containers*.

**flex-direction** - propriedade que estabelece o eixo principal do container, definindo a direção na qual os flex items são colocados no container. *row, row-reverse, column e column-reverse*.

**flex-wrap** - propriedade que define a quebra de linha. por padrão a linha não é quebrada.

* **no-wrap**: por padrão, não quebra a linha
* **wrap**: permite a quebra de linha. a partir do momento que o elemento não cabe mais no container, ele joga o elemento para baixo.
* **wrap-reverse**: permite a quebra de linha, porém na direção contrária.

**flex-flow** - atalho para *flex-direction e flex-wrap*

**justify-content** - alinhar itens dentro do container de acordo com a direção pretendida e espaçamento entre eles. (caso os itens ocupem todo o espaço do container, essa propriedade nao se aplica)

* **flex-start**: alinha **el** no início do container
* **flex-end**: alinda **el** no final do container
* **center**: alinha **el** no centro
* **space-between**: espaçamento igual entre os elementos (com uma margem no inicio e no fim)
* **space-around**: espaçamentos do meio são duas vezes maiores que o inicial e o final.

**align-items**: trata do alinhamento dos itens de acordo com o eixo do container (row ou column)

* **center**: centro
* **stretch**: flex itens crescem igualmente
* **flex-start**: inicio
* **flex-end**: final
* **baseline**: alinhamento de acordo com a base da tipografia dos itens

**align-content**: alinha o conteúdo no eixo vertical. precisa ter o flex-wrap ativado. a altura do container precisa ser maior que a soma das linhas do itens.

* center
* stretch
* flex-start
* flex-end
* space-between