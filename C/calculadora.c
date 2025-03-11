#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    while (true) {
    float primeiro = get_float("Insira um valor:");
    string operador = get_string("Insira um operador (+, -, /, *):");
    float segundo = get_float("Insira outro valor:");

    if (strcmp(operador, "+") == 0) {
        printf("O resultado é %f\n", primeiro + segundo);
    }
    else if (strcmp(operador, "-") == 0) {
        printf("O resultado é %f\n", primeiro - segundo);
    }
    else if (strcmp(operador, "/") == 0) {
        if (segundo == 0) {
            printf("Erro, divisão por zero não é permitida.\n");
        }
        else {
            printf("O resultado é %f\n", primeiro / segundo);
        }
    }
    else if (strcmp(operador, "*") == 0) {
        printf("O resultado é %f\n", primeiro * segundo);
    }
    else {
        printf("O operador inserido é inválido.\n");
    }

    string continuar = get_string("Deseja fazer outro cálculo [S/N]?");
    if (strcmp(continuar, "n") == 0 || strcmp(continuar, "N") == 0) {
        break;
    }
    }
}
