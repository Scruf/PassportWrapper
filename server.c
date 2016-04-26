#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <netinet/in.h>


int main (int argc, char *argv[]){
  int sockfd,newsockfd,portno;
  socklen_t client;
  char buffer[256];
  struct sockaddr_in serv_addr,cli_addr;
  int n;
  sockfd = socket(AF_INET, SOCK_STREAM,0);
  if(sockfd<0){
    fprintf(stderr, "Error openning socket");
  }
  bzero((char*)&serv_addr,sizeof(serv_addr));
  portno = 8000;
  serv_addr.sin_family = AF_INET;
  serv_addr.sin_addr.s_addr = INADDR_ANY;
  serv_addr.sin_port = htons(portno);
  if(bind(sockfd,(struct sockaddr *) &serv_addr, sizeof(serv_addr))<0)
    printf("Error on binding");
  listen(sockfd,5);
  client = sizeof(cli_addr);
    newsockfd = accept(sockfd,
                (struct sockaddr *) &cli_addr,
                &client);
    if (newsockfd < 0)
         printf("ERROR on accept");
    bzero(buffer,256);
    n = read(newsockfd,buffer,255);
    if (n < 0) printf("ERROR reading from socket");
    printf("Here is the message: %s\n",buffer);
    n = write(newsockfd,"I got your message",18);
    if (n < 0) printf("ERROR writing to socket");
    close(newsockfd);
    close(sockfd);
    return 0;
}
